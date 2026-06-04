import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { GeoGebraCodeBlock } from './GeoGebraCodeBlock';
import { GeoGebraFloatingCalculator, type GeoGebraAppType } from './GeoGebraFloatingCalculator';

// ─── Data Models ──────────────────────────────────────────────
interface FieldDoc {
  id: string;
  title: string;
  carousel_category: string;
  formal_statement?: string;
  rigorous_proof?: string;
  markdown?: string;
  geogebra?: string;
}

interface ForgeDoc {
  id: string;
  title: string;
  carousel_category: string;
  question: string;
  solution: string;
  discussion: string;
}

interface DashboardProps {
  mode: 'Fields' | 'Forge';
  setMode?: (mode: 'Fields' | 'Forge') => void;
}

/** Helper to ensure block math renders correctly by adding newlines */
const formatMathText = (text: string) => {
  // Ensure display math blocks ($$...$$) are on their own lines
  // surrounded by blank lines so remark-math treats them as display math.
  return text
    // Match paired $$...$$ (non-greedy) and ensure proper block formatting
    .replace(/\$\$([\s\S]*?)\$\$/g, (_match, content) => {
      const trimmed = content.trim();
      return `\n\n$$\n${trimmed}\n$$\n\n`;
    })
    .replace(/\n{3,}/g, '\n\n');
};

// ─── TOC Helpers ──────────────────────────────────────────────
interface TocHeading {
  id: string;
  text: string;
  level: number;
}

/** Convert a heading string into a URL-safe slug */
const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/**
 * Scan raw markdown strings for # headings and return a flat list.
 * `sectionPrefixes` are prepended as level-2 entries (the hard-coded
 * SectionHeading banners like "Formal Statement").
 */
function extractHeadings(
  sections: { label: string; markdown: string }[]
): TocHeading[] {
  const headings: TocHeading[] = [];
  for (const section of sections) {
    // Add the section banner itself as a level-2 heading, unless it's the generic "Field"
    if (section.label !== 'Field') {
      headings.push({ id: `toc-${slugify(section.label)}`, text: section.label, level: 2 });
    }
    // Scan the markdown for sub-headings
    const regex = /^(#{1,4})\s+(.+)$/gm;
    let match;
    while ((match = regex.exec(section.markdown)) !== null) {
      const level = match[1].length;
      let text = match[2].trim();
      // Strip basic markdown bold/italic tags for cleaner TOC display
      text = text.replace(/\*\*/g, '').replace(/__/g, '').trim();
      headings.push({ id: `toc-${slugify(section.label)}-${slugify(match[2].trim())}`, text, level: Math.max(level, 3) });
    }
  }
  return headings;
}

function customMarkdownComponents(sectionSlug: string, setIsCalculatorOpen?: (open: boolean) => void) {
  const extractText = (node: any): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (node && node.props && node.props.children) return extractText(node.props.children);
    return '';
  };

  const HeadingFactory = (Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') =>
    function HeadingWithId(props: any) {
      const text = extractText(props.children);
      const id = `toc-${sectionSlug}-${slugify(text)}`;
      const { node, children, ...rest } = props;

      // Main headings — big, gradient, decorative underline via CSS
      if (Tag === 'h1' || Tag === 'h2') {
        return (
          <h2 id={id} className="md-heading-main text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300" {...rest}>
            {children}
          </h2>
        );
      }
      // Subheadings — medium, solid color, thinner decorative underline
      if (Tag === 'h3') {
        return (
          <h3 id={id} className="md-heading-sub text-3xl md:text-4xl text-slate-900 dark:text-slate-100" {...rest}>
            {children}
          </h3>
        );
      }
      // Minor headings — smaller, no underline
      if (Tag === 'h4' || Tag === 'h5' || Tag === 'h6') {
        return (
          <h4 id={id} className="md-heading-minor text-2xl md:text-3xl text-slate-800 dark:text-slate-200" {...rest}>
            {children}
          </h4>
        );
      }
      return React.createElement(Tag, { id, ...rest }, children);
    };

  return {
    h1: HeadingFactory('h1'),
    h2: HeadingFactory('h2'),
    h3: HeadingFactory('h3'),
    h4: HeadingFactory('h4'),
    h5: HeadingFactory('h5'),
    h6: HeadingFactory('h6'),
    blockquote: ({ node, ...props }: any) => (
      <blockquote
        className="border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-transparent dark:from-amber-900/15 dark:to-transparent px-6 py-5 rounded-r-xl my-10 shadow-sm text-black dark:text-slate-300"
        style={{ fontFamily: "'Kalam', cursive" }}
        {...props}
      />
    ),
    strong: ({ node, ...props }: any) => (
      <strong className="font-bold text-amber-700 dark:text-amber-400" {...props} />
    ),
    p: ({ node, ...props }: any) => (
      <p className="leading-relaxed text-xl text-slate-900 dark:text-slate-200 mb-6 font-medium" {...props} />
    ),
    ul: ({ node, ...props }: any) => (
      <ul className="list-disc list-inside sm:list-outside sm:ml-6 mb-6 text-xl text-slate-900 dark:text-slate-200 space-y-2 font-medium" {...props} />
    ),
    ol: ({ node, ...props }: any) => (
      <ol className="list-decimal list-inside sm:list-outside sm:ml-6 mb-6 text-xl text-slate-900 dark:text-slate-200 space-y-2 font-medium" {...props} />
    ),
    pre: ({ node, ...props }: any) => (
      <pre className="overflow-x-auto my-10 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800" style={{ fontFamily: "monospace" }} {...props} />
    ),
    li: ({ node, ...props }: any) => (
      <li className="leading-[2]" {...props} />
    ),
    // Intercept fenced ```geogebra ... ``` blocks and render the live applet
    code: ({node, inline, className, children, ...props}: any) => {
      const match = /language-(\w+)/.exec(className || '');
      
      if (!inline && match && match[1] === 'geogebra') {
        const rawCode = String(children).replace(/\n$/, '');
        return (
          <GeoGebraCodeBlock
            code={rawCode}
            onOpenCalculator={() => setIsCalculatorOpen?.(true)}
          />
        );
      }

      return <code className={className} {...props}>{children}</code>;
    },
  };
}

// ─── Table of Contents Component ──────────────────────────────
function TableOfContents({
  headings,
  scrollContainer,
}: {
  headings: TocHeading[];
  scrollContainer: React.RefObject<HTMLDivElement | null>;
}) {
  const [activeId, setActiveId] = useState<string>('');
  const [popoverOpen, setPopoverOpen] = useState(false);

  // --- Scroll spy via IntersectionObserver ---
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: container,
        rootMargin: '-10% 0px -75% 0px',
        threshold: 0,
      }
    );

    // Observe all heading elements
    for (const h of headings) {
      const el = container.querySelector(`#${CSS.escape(h.id)}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings, scrollContainer]);

  const scrollTo = useCallback(
    (id: string) => {
      setActiveId(id);
      setPopoverOpen(false);
      const container = scrollContainer.current;
      if (!container) return;
      const el = container.querySelector(`#${CSS.escape(id)}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Brief highlight flash
        el.classList.add('toc-flash');
        setTimeout(() => el.classList.remove('toc-flash'), 1200);
      }
    },
    [scrollContainer]
  );

  if (headings.length === 0) return null;

  const tocList = (
    <ul className="toc-list">
      {headings.map((h) => (
        <li
          key={h.id}
          className={`toc-item toc-level-${h.level} ${activeId === h.id ? 'toc-active' : ''}`}
        >
          <button onClick={() => scrollTo(h.id)} type="button">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={{
                p: ({ node, ...props }: any) => <span {...props} />,
              }}
            >
              {h.text}
            </ReactMarkdown>
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop rail */}
      <nav className="toc-rail" aria-label="Table of contents">
        <span className="toc-rail-title">On this page</span>
        {tocList}
      </nav>

      {/* Floating button (tablet) */}
      <div className="toc-floating">
        <button
          className="toc-floating-btn"
          onClick={() => setPopoverOpen((o) => !o)}
          type="button"
          aria-label="Table of contents"
        >
          §
        </button>
        {popoverOpen && (
          <div className="toc-popover">
            <span className="toc-popover-title">On this page</span>
            {tocList}
          </div>
        )}
      </div>
    </>
  );
}

// ─── Carousel Grouping Helper ─────────────────────────────────
function groupByCategory<T extends { carousel_category: string }>(
  docs: T[]
): { category: string; items: T[] }[] {
  const map = new Map<string, T[]>();
  for (const doc of docs) {
    const key = doc.carousel_category || 'Uncategorised';
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(doc);
  }
  return Array.from(map, ([category, items]) => ({ category, items }));
}

// ─── Loading Skeleton ─────────────────────────────────────────
function DashboardSkeleton() {
  return (
    <div className="dashboard">
      <div className="dashboard-master dashboard-master-fields">
        {/* Skeleton search bar */}
        <div className="dashboard-search-bar">
          <div className="topic-search-wrapper">
            <div className="skeleton-select" style={{ height: 42 }} />
          </div>
        </div>

        {/* Skeleton hero */}
        <div className="dashboard-hero-wrap">
          <div
            className="skeleton-select"
            style={{ height: 200, borderRadius: 'var(--radius-xl)' }}
          />
        </div>

        {/* Skeleton carousels */}
        <div className="dashboard-carousels">
          {[1, 2].map((row) => (
            <section key={row} className="dashboard-carousel-section">
              <div className="skeleton-select" style={{ width: 140, height: 14, marginBottom: 16 }} />
              <div className="dashboard-carousel-track">
                {[1, 2, 3, 4].map((card) => (
                  <div
                    key={card}
                    className="skeleton-select"
                    style={{
                      width: 240,
                      height: 160,
                      flexShrink: 0,
                      borderRadius: 'var(--radius-lg)',
                    }}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────
export default function Dashboard({ mode }: DashboardProps) {
  // --- Data state ---
  const [fieldsData, setFieldsData] = useState<FieldDoc[]>([]);
  const [forgeData, setForgeData] = useState<ForgeDoc[]>([]);
  const [loading, setLoading] = useState(true);

  // --- UI state ---
  const [selectedItem, setSelectedItem] = useState<FieldDoc | ForgeDoc | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [activeApp, setActiveApp] = useState<GeoGebraAppType>('graphing');
  const detailBodyRef = useRef<HTMLDivElement>(null);
  // --- Fetch on mount ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fieldsSnap, forgeSnap] = await Promise.all([
          getDocs(collection(db, 'fields')),
          getDocs(collection(db, 'forge')),
        ]);

        const fields: FieldDoc[] = fieldsSnap.docs.map((d) => ({
          id: d.id,
          title: d.data().title ?? 'Untitled',
          carousel_category: d.data().carousel_category ?? '',
          formal_statement: d.data().formal_statement ?? '',
          rigorous_proof: d.data().rigorous_proof ?? '',
          markdown: d.data().markdown ?? '',
          geogebra: d.data().geogebra,
        }));

        const forge: ForgeDoc[] = forgeSnap.docs.map((d) => ({
          id: d.id,
          title: d.data().title ?? 'Untitled',
          carousel_category: d.data().carousel_category ?? '',
          question: d.data().question ?? '',
          solution: d.data().solution ?? '',
          discussion: d.data().discussion ?? '',
        }));

        setFieldsData(fields);
        setForgeData(forge);
      } catch (err) {
        console.error('Dashboard: failed to fetch data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Clear selection on mode switch ---
  useEffect(() => {
    setSelectedItem(null);
    setSearchQuery('');
  }, [mode]);

  // --- Active dataset ---
  const activeRawData = mode === 'Fields' ? fieldsData : forgeData;

  // --- Filter by search ---
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return activeRawData;
    const q = searchQuery.toLowerCase();
    return activeRawData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.carousel_category.toLowerCase().includes(q)
    );
  }, [activeRawData, searchQuery]);

  // --- Group into carousels ---
  const carousels = useMemo(() => groupByCategory(filteredData), [filteredData]);

  // --- Hero: the first document in the dataset ---
  const heroItem = activeRawData.length > 0 ? activeRawData[0] : null;

  const isDetailView = selectedItem !== null;

  const handleSelectItem = (item: FieldDoc | ForgeDoc) => {
    setSelectedItem(item);
  };

  // ─── Loading State ────────────────────────────────────────────
  if (loading) return <DashboardSkeleton />;

  // ─── Empty State ──────────────────────────────────────────────
  if (activeRawData.length === 0) {
    return (
      <div className="dashboard">
        <div className="dashboard-master dashboard-master-fields">
          <div className="center-content" style={{ padding: '80px 32px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>📭</div>
            <h2 className="center-title">No {mode} content yet</h2>
            <p className="center-subtitle">
              Documents will appear here once they're added to the <strong>{mode.toLowerCase()}</strong> collection.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ─── Shared UI Pieces ─────────────────────────────────────────
  const heroSelected = selectedItem?.id === heroItem?.id;

  const heroCard = (variant: 'side' | 'compact' | 'top') =>
    heroItem ? (
      <div
        className={`dashboard-hero ${
          variant === 'side'
            ? 'dashboard-hero-side'
            : variant === 'compact'
              ? 'dashboard-hero-compact'
              : ''
        } ${heroSelected ? 'selected' : ''}`}
        onClick={() => handleSelectItem(heroItem)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleSelectItem(heroItem)}
      >
        <div className="dashboard-hero-glow" aria-hidden="true" />
        {variant !== 'compact' && (
          <span className="dashboard-hero-deco" aria-hidden="true">
            {mode === 'Fields' ? '∫' : '∑'}
          </span>
        )}
        <div className="dashboard-hero-content">
          <h2 className="dashboard-hero-title">{heroItem.title}</h2>
          {variant !== 'compact' && (
            <div className="dashboard-hero-tags">
              <span className="dashboard-tag dashboard-tag-featured">{heroItem.carousel_category}</span>
              {mode === 'Fields' && 'geogebra' in heroItem && (heroItem as FieldDoc).geogebra && (
                <span className="dashboard-tag dashboard-tag-interactive">Interactive</span>
              )}
            </div>
          )}
        </div>
      </div>
    ) : null;

  const searchBar = (
    <div className="dashboard-search-bar">
      <div className="topic-search-wrapper">
        <input
          className="topic-search-input"
          type="text"
          placeholder={`Search ${mode} for topics, questions, or papers…`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="topic-search-icon">🔍</span>
        {searchQuery && (
          <button
            className="topic-search-clear"
            onClick={() => setSearchQuery('')}
            type="button"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );

  const carouselSections = (
    <>
      {carousels.length === 0 && searchQuery && (
        <div className="center-content" style={{ padding: '40px 0' }}>
          <p className="center-subtitle">No results for "{searchQuery}"</p>
        </div>
      )}
      {carousels.map((group) => (
        <section key={group.category} className="dashboard-carousel-section">
          <h3 className="dashboard-carousel-title">{group.category}</h3>
          <div className={`dashboard-carousel-track ${isDetailView ? 'dashboard-carousel-track-vertical' : ''}`}>
            {group.items.map((item) => (
              <div
                key={item.id}
                className={`dashboard-card ${isDetailView ? 'dashboard-card-compact' : ''} ${selectedItem?.id === item.id ? 'selected' : ''}`}
                onClick={() => handleSelectItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleSelectItem(item)}
              >
                <div className="dashboard-card-inner">
                  <h4 className="dashboard-card-title">{item.title}</h4>
                  <span className="dashboard-card-badge">{item.carousel_category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );

  // ─── Render ───────────────────────────────────────────────────
  return (
    <div className={`dashboard ${isDetailView ? 'dashboard-split' : ''}`}>
      <GeoGebraFloatingCalculator
        open={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        activeApp={activeApp}
        onAppChange={setActiveApp}
      />

      {/* Master / Sidebar pane */}
      <div
        className={`dashboard-master ${isDetailView ? 'dashboard-master-compact' : ''} ${
          !isDetailView && mode === 'Forge' ? 'dashboard-master-forge' : ''
        } ${!isDetailView && mode === 'Fields' ? 'dashboard-master-fields' : ''}`}
      >
        {isDetailView ? (
          <>
            <div className="dashboard-hero-wrap dashboard-hero-wrap-compact">
              {heroCard('compact')}
            </div>
            <div className="dashboard-carousels">{carouselSections}</div>
          </>
        ) : mode === 'Forge' ? (
          <div className="dashboard-browse-layout">
            <aside className="dashboard-hero-sidebar">{heroCard('side')}</aside>
            <div className="dashboard-browse-main">
              {searchBar}
              <div className="dashboard-carousels">{carouselSections}</div>
            </div>
          </div>
        ) : (
          <>
            {searchBar}
            <div className="dashboard-hero-wrap">{heroCard('top')}</div>
            <div className="dashboard-carousels">{carouselSections}</div>
          </>
        )}
      </div>

      {/* Detail pane */}
      <div className={`dashboard-detail ${isDetailView ? 'dashboard-detail-open' : ''}`}>
        {isDetailView && selectedItem && (
          <>
            <div className="dashboard-detail-header">
              <h2 className="dashboard-detail-title">{selectedItem.title}</h2>
              <button
                className="dashboard-detail-close"
                onClick={() => setSelectedItem(null)}
                type="button"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            <div className="dashboard-detail-body" ref={detailBodyRef}>
              <div className="dashboard-detail-content" key={selectedItem.id}>
                {mode === 'Fields' ? (
                  <FieldsDetail item={selectedItem as FieldDoc} scrollRef={detailBodyRef} setIsCalculatorOpen={setIsCalculatorOpen} />
                ) : (
                  <ForgeDetail item={selectedItem as ForgeDoc} scrollRef={detailBodyRef} setIsCalculatorOpen={setIsCalculatorOpen} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Reusable Detail Heading ──────────────────────────────────
function SectionHeading({ title, id, level = 3 }: { title: React.ReactNode; id?: string; level?: number }) {
  if (level === 4) {
    return (
      <div id={id} className="w-full mt-12 mb-6 scroll-mt-4">
        <h3 className="text-lg md:text-xl font-bold text-slate-300">{title}</h3>
      </div>
    );
  }
  return (
    <div id={id} className="flex items-center w-full mt-24 mb-12 opacity-80 scroll-mt-4">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-slate-200 px-8 text-center">{title}</h2>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
    </div>
  );
}

// ─── Fields Detail Pane ───────────────────────────────────────
function FieldsDetail({ item, scrollRef, setIsCalculatorOpen }: { item: FieldDoc; scrollRef: React.RefObject<HTMLDivElement | null>; setIsCalculatorOpen: (open: boolean) => void }) {
  const sections = useMemo(() => {
    const s: { label: string; markdown: string }[] = [];
    if (item.markdown) {
      s.push({ label: 'Field', markdown: item.markdown });
    } else {
      if (item.formal_statement) s.push({ label: 'Formal Statement', markdown: item.formal_statement });
      if (item.rigorous_proof) s.push({ label: 'Rigorous Proof', markdown: item.rigorous_proof });
    }
    if (item.geogebra) s.push({ label: 'GeoGebra Sandbox', markdown: '' });
    return s;
  }, [item]);

  const headings = useMemo(() => extractHeadings(sections), [sections]);

  return (
    <div className="dashboard-detail-with-toc">
      <div className="dashboard-fields-content flex flex-col gap-y-8 pb-32">
        {item.markdown ? (
          <div className="flex flex-col">
            <div className="dashboard-markdown w-full max-w-4xl mx-auto">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={customMarkdownComponents(slugify('Field'), setIsCalculatorOpen)}
              >
                {formatMathText(item.markdown)}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <>
            {/* Formal Statement */}
            {item.formal_statement && (
              <div className="flex flex-col">
                <SectionHeading title="Formal Statement" id={`toc-${slugify('Formal Statement')}`} />
                <div className="dashboard-markdown w-full max-w-4xl mx-auto">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={customMarkdownComponents(slugify('Formal Statement'), setIsCalculatorOpen)}
                  >
                    {formatMathText(item.formal_statement)}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {/* Rigorous Proof */}
            {item.rigorous_proof && (
              <div className="flex flex-col">
                <SectionHeading title="Rigorous Proof" id={`toc-${slugify('Rigorous Proof')}`} />
                <div className="dashboard-markdown w-full max-w-4xl mx-auto">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={customMarkdownComponents(slugify('Rigorous Proof'), setIsCalculatorOpen)}
                  >
                    {formatMathText(item.rigorous_proof)}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </>
        )}

        {/* GeoGebra Sandbox */}
        {item.geogebra && (
          <div id={`toc-${slugify('GeoGebra Sandbox')}`}>
            <GeoGebraCodeBlock
              code={item.geogebra}
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />
          </div>
        )}

        {/* Fallback if nothing is present */}
        {!item.markdown && !item.formal_statement && !item.rigorous_proof && !item.geogebra && (
          <div className="center-content" style={{ padding: '40px 0' }}>
            <p className="center-subtitle">No content available for this field entry.</p>
          </div>
        )}
      </div>

      <TableOfContents headings={headings} scrollContainer={scrollRef} />
    </div>
  );
}

// ─── Forge Detail Pane ────────────────────────────────────────
function ForgeDetail({ item, scrollRef, setIsCalculatorOpen }: { item: ForgeDoc; scrollRef: React.RefObject<HTMLDivElement | null>; setIsCalculatorOpen: (open: boolean) => void }) {
  const sections = useMemo(() => {
    const s: { label: string; markdown: string }[] = [];
    if (item.question) s.push({ label: 'Question', markdown: item.question });
    if (item.solution) s.push({ label: 'The Solution', markdown: item.solution });
    if (item.discussion) s.push({ label: 'Discussion', markdown: item.discussion });
    return s;
  }, [item]);

  const headings = useMemo(() => extractHeadings(sections), [sections]);

  return (
    <div className="dashboard-detail-with-toc">
      <div className="dashboard-forge-content flex flex-col gap-y-8 pb-32">
        {/* Question */}
        {item.question && (
          <div className="flex flex-col">
            <SectionHeading title="Question" id={`toc-${slugify('Question')}`} />
            <div className="dashboard-markdown w-full max-w-4xl mx-auto">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={customMarkdownComponents(slugify('Question'), setIsCalculatorOpen)}
              >
                {formatMathText(item.question)}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {/* The Solution */}
        {item.solution && (
          <div className="flex flex-col">
            <SectionHeading title="The Solution" id={`toc-${slugify('The Solution')}`} />
            <div className="relative group">
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                <span className="bg-slate-800/80 text-slate-300 px-4 py-2 rounded-full backdrop-blur-sm tracking-widest text-xs uppercase border border-slate-700">
                  Hover to reveal
                </span>
              </div>
              <div className="dashboard-markdown text-lg leading-relaxed blur-md transition-all duration-500 ease-out group-hover:blur-none">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={customMarkdownComponents(slugify('The Solution'), setIsCalculatorOpen)}
                >
                  {formatMathText(item.solution)}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* Discussion */}
        {item.discussion && (
          <div className="flex flex-col">
            <SectionHeading title="Discussion" id={`toc-${slugify('Discussion')}`} />
            <div className="relative group">
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                <span className="bg-slate-800/80 text-slate-300 px-4 py-2 rounded-full backdrop-blur-sm tracking-widest text-xs uppercase border border-slate-700">
                  Hover to reveal
                </span>
              </div>
              <div className="dashboard-markdown text-lg leading-relaxed blur-md transition-all duration-500 ease-out group-hover:blur-none">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={customMarkdownComponents(slugify('Discussion'), setIsCalculatorOpen)}
                >
                  {formatMathText(item.discussion)}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* Fallback if nothing is present */}
        {!item.question && !item.solution && !item.discussion && (
          <div className="center-content" style={{ padding: '40px 0' }}>
            <p className="center-subtitle">No content available for this forge entry.</p>
          </div>
        )}
      </div>

      <TableOfContents headings={headings} scrollContainer={scrollRef} />
    </div>
  );
}
