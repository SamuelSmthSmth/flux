import { useState, useEffect, useMemo } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// ─── Data Models ──────────────────────────────────────────────
interface FieldDoc {
  id: string;
  title: string;
  carousel_category: string;
  formal_statement: string;
  rigorous_proof: string;
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

type ForgeTabId = 'question' | 'solution' | 'discussion';

const FORGE_TABS: { id: ForgeTabId; label: string }[] = [
  { id: 'question', label: 'Question' },
  { id: 'solution', label: 'The Solution' },
  { id: 'discussion', label: 'Discussion' },
];

/** Helper to ensure block math renders correctly by adding newlines */
const formatMathText = (text: string) => {
  return text
    .replace(/\$\$/g, '\n$$\n')
    .replace(/\n{3,}/g, '\n\n');
};

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
  const [activeTab, setActiveTab] = useState<ForgeTabId>('question');

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
    setActiveTab('question');
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
    setActiveTab('question');
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

            <div className="dashboard-detail-body">
              <div className="dashboard-detail-content" key={selectedItem.id}>
                {mode === 'Fields' ? (
                  <FieldsDetail item={selectedItem as FieldDoc} />
                ) : (
                  <ForgeDetail item={selectedItem as ForgeDoc} />
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
function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center w-full mt-24 mb-12 opacity-80">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-slate-200 px-8 text-center">{title}</h2>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1"></div>
    </div>
  );
}

// ─── Fields Detail Pane ───────────────────────────────────────
function FieldsDetail({ item }: { item: FieldDoc }) {
  return (
    <div className="dashboard-fields-content flex flex-col gap-y-8 pb-32">
      {/* Formal Statement */}
      {item.formal_statement && (
        <div className="flex flex-col">
          <SectionHeading title="Formal Statement" />
          <div className="dashboard-markdown text-lg leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {formatMathText(item.formal_statement)}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* Rigorous Proof */}
      {item.rigorous_proof && (
        <div className="flex flex-col">
          <SectionHeading title="Rigorous Proof" />
          <div className="dashboard-markdown text-lg leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {formatMathText(item.rigorous_proof)}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* GeoGebra Sandbox */}
      {item.geogebra && (
        <div className="dashboard-sandbox mt-12">
          <div className="dashboard-sandbox-header">
            <span className="dashboard-sandbox-label">GeoGebra Interactive Sandbox</span>
            <div className="dashboard-sandbox-dots">
              <span /><span /><span />
            </div>
          </div>
          <div className="dashboard-sandbox-body">
            <div className="dashboard-sandbox-grid" aria-hidden="true" />
            <div
              className="dashboard-sandbox-placeholder"
              style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '0.78rem', textAlign: 'left', maxWidth: '100%', overflow: 'auto' }}
            >
              {item.geogebra}
            </div>
          </div>
        </div>
      )}

      {/* Fallback if nothing is present */}
      {!item.formal_statement && !item.rigorous_proof && !item.geogebra && (
        <div className="center-content" style={{ padding: '40px 0' }}>
          <p className="center-subtitle">No content available for this field entry.</p>
        </div>
      )}
    </div>
  );
}

// ─── Forge Detail Pane ────────────────────────────────────────
function ForgeDetail({ item }: { item: ForgeDoc }) {
  return (
    <div className="dashboard-forge-content flex flex-col gap-y-8 pb-32">
      {/* Question */}
      {item.question && (
        <div className="flex flex-col">
          <SectionHeading title="Question" />
          <div className="dashboard-markdown text-lg leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {formatMathText(item.question)}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* The Solution */}
      {item.solution && (
        <div className="flex flex-col">
          <SectionHeading title="The Solution" />
          <div className="relative group">
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
              <span className="bg-slate-800/80 text-slate-300 px-4 py-2 rounded-full backdrop-blur-sm tracking-widest text-xs uppercase border border-slate-700">
                Hover to reveal
              </span>
            </div>
            <div className="dashboard-markdown text-lg leading-relaxed blur-md transition-all duration-500 ease-out group-hover:blur-none">
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {formatMathText(item.solution)}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {/* Discussion */}
      {item.discussion && (
        <div className="flex flex-col">
          <SectionHeading title="Discussion" />
          <div className="relative group">
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
              <span className="bg-slate-800/80 text-slate-300 px-4 py-2 rounded-full backdrop-blur-sm tracking-widest text-xs uppercase border border-slate-700">
                Hover to reveal
              </span>
            </div>
            <div className="dashboard-markdown text-lg leading-relaxed blur-md transition-all duration-500 ease-out group-hover:blur-none">
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
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
  );
}
