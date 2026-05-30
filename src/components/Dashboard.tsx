import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface DashboardProps {
  mode: 'Fields' | 'Forge';
  setMode?: (mode: 'Fields' | 'Forge') => void;
}

type TabId = 'preflight' | 'hints' | 'solution' | 'postmortem';

const FORGE_TABS: { id: TabId; label: string }[] = [
  { id: 'preflight', label: 'Pre-Flight Briefing' },
  { id: 'hints', label: 'Strategic Hints' },
  { id: 'solution', label: 'The Neek Solution' },
  { id: 'postmortem', label: 'Post-Mortem' },
];

export default function Dashboard({ mode }: DashboardProps) {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabId>('preflight');

  const fieldsData = {
    hero: { id: 'hero', title: 'The Chain Rule: First Principles', type: 'Hero' },
    carousels: [
      {
        title: 'Essential Proofs',
        items: [
          { id: 'f1', title: 'Irrationality of √2', difficulty: 'Standard' },
          { id: 'f2', title: 'Power Rule', difficulty: 'Standard' },
          { id: 'f3', title: 'Infinite Primes', difficulty: 'Advanced' },
        ],
      },
      {
        title: 'Foundational Algebra',
        items: [
          { id: 'f4', title: 'Completing the Square', difficulty: 'Standard' },
          { id: 'f5', title: 'Logarithm Rules', difficulty: 'Standard' },
          { id: 'f6', title: 'Pythagoras', difficulty: 'Standard' },
        ],
      },
    ],
  };

  const forgeData = {
    hero: { id: 'hero', title: 'AEA 2008 Integration Beast', type: 'Hero' },
    carousels: [
      {
        title: 'Hall of Fame',
        items: [
          { id: 'fo1', title: 'STEP III 2015 Q1', difficulty: 'Hardcore' },
          { id: 'fo2', title: 'IMO 2010 Gold', difficulty: 'Hardcore' },
          { id: 'fo3', title: 'STEP III 2021 Q4', difficulty: 'Hardcore' },
        ],
      },
      {
        title: 'Hardcore Focus',
        items: [
          { id: 'fo4', title: 'Brutal Integration', difficulty: 'Hardcore' },
          { id: 'fo5', title: 'Abstract Algebra', difficulty: 'Hardcore' },
          { id: 'fo6', title: 'STEP II Vectors', difficulty: 'Hardcore' },
        ],
      },
    ],
  };

  const activeData = mode === 'Fields' ? fieldsData : forgeData;
  const isDetailView = selectedItem !== null;

  const handleSelectItem = (item: any) => {
    setSelectedItem(item);
    setActiveTab('preflight');
  };

  return (
    <div className={`dashboard ${isDetailView ? 'dashboard-split' : ''}`}>
      {/* Master / Sidebar pane */}
      <div className={`dashboard-master ${isDetailView ? 'dashboard-master-compact' : ''}`}>
        {!isDetailView && (
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
        )}

        {/* Hero */}
        <div className={`dashboard-hero-wrap ${isDetailView ? 'dashboard-hero-wrap-compact' : ''}`}>
          <div
            className={`dashboard-hero ${isDetailView ? 'dashboard-hero-compact' : ''} ${selectedItem?.id === activeData.hero.id ? 'selected' : ''}`}
            onClick={() => handleSelectItem(activeData.hero)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelectItem(activeData.hero)}
          >
            <div className="dashboard-hero-glow" aria-hidden="true" />
            {!isDetailView && (
              <span className="dashboard-hero-deco" aria-hidden="true">
                {mode === 'Fields' ? '∫' : '∑'}
              </span>
            )}
            <div className="dashboard-hero-content">
              <h2 className="dashboard-hero-title">{activeData.hero.title}</h2>
              {!isDetailView && (
                <div className="dashboard-hero-tags">
                  <span className="dashboard-tag dashboard-tag-featured">Featured</span>
                  <span className="dashboard-tag dashboard-tag-interactive">Interactive</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Carousels */}
        <div className="dashboard-carousels">
          {activeData.carousels.map((carousel, idx) => (
            <section key={idx} className="dashboard-carousel-section">
              <h3 className="dashboard-carousel-title">{carousel.title}</h3>
              <div className={`dashboard-carousel-track ${isDetailView ? 'dashboard-carousel-track-vertical' : ''}`}>
                {carousel.items.map((item) => (
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
                      <span className={`dashboard-card-badge dashboard-card-badge-${item.difficulty.toLowerCase()}`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Detail pane */}
      <div className={`dashboard-detail ${isDetailView ? 'dashboard-detail-open' : ''}`}>
        {isDetailView && (
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
                  <FieldsDetail />
                ) : (
                  <ForgeDetail activeTab={activeTab} setActiveTab={setActiveTab} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FieldsDetail() {
  return (
    <div className="dashboard-fields-content">
      <div className="dashboard-prereq-tags">
        <span className="dashboard-prereq-tag">Prerequisite: Limits</span>
        <span className="dashboard-prereq-tag">Prerequisite: Functions</span>
      </div>

      <div className="dashboard-markdown">
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {`## Rigorous Proof\n\nLet $f(x)$ be a differentiable function. The derivative from first principles is defined as:\n\n$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$\n\nConsider the power rule for $f(x) = x^n$ where $n$ is a positive integer. Using the binomial expansion:\n\n$$ (x+h)^n = x^n + nx^{n-1}h + \\frac{n(n-1)}{2}x^{n-2}h^2 + \\dots + h^n $$\n\nSubstituting this into our limit definition yields the beautiful result $nx^{n-1}$.`}
        </ReactMarkdown>
      </div>

      <div className="dashboard-sandbox">
        <div className="dashboard-sandbox-header">
          <span className="dashboard-sandbox-label">GeoGebra Interactive Sandbox</span>
          <div className="dashboard-sandbox-dots">
            <span /><span /><span />
          </div>
        </div>
        <div className="dashboard-sandbox-body">
          <div className="dashboard-sandbox-grid" aria-hidden="true" />
          <span className="dashboard-sandbox-placeholder">Interactive Element Loading…</span>
        </div>
      </div>
    </div>
  );
}

function ForgeDetail({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}) {
  return (
    <div className="dashboard-forge-content">
      <div className="dashboard-forge-tabs">
        {FORGE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`dashboard-forge-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="dashboard-forge-panel">
        {activeTab === 'preflight' && (
          <div className="dashboard-markdown">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {`### The Challenge\n\nEvaluate the integral:\n\n$$ I = \\int_{0}^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx $$\n\n**Warning**: Standard integration techniques like substitution or parts will lead you into a brutal algebraic nightmare. You must find the symmetry trick.`}
            </ReactMarkdown>
          </div>
        )}

        {activeTab === 'hints' && (
          <div className="dashboard-hints">
            <div className="dashboard-hint-card">
              <span className="dashboard-hint-label">Hint 1</span>
              <div className="dashboard-markdown">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {`Consider the property $\\int_a^b f(x) dx = \\int_a^b f(a+b-x) dx$.`}
                </ReactMarkdown>
              </div>
            </div>
            <div className="dashboard-hint-card dashboard-hint-reveal">
              <span className="dashboard-hint-label">Hint 2 — hover to reveal</span>
              <div className="dashboard-markdown">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {`Apply the property with $a=0, b=\\pi/2$. What happens to $\\sin(\\pi/2 - x)$?`}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div className="dashboard-markdown">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {`### Elegant Solution\n\nLet:\n$$ I = \\int_{0}^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx $$\n\nUsing the property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$:\n\n$$ I = \\int_{0}^{\\pi/2} \\frac{\\sin^3(\\pi/2 - x)}{\\sin^3(\\pi/2 - x) + \\cos^3(\\pi/2 - x)} dx $$\n\nSince $\\sin(\\pi/2-x) = \\cos x$ and $\\cos(\\pi/2-x) = \\sin x$:\n\n$$ I = \\int_{0}^{\\pi/2} \\frac{\\cos^3 x}{\\cos^3 x + \\sin^3 x} dx $$\n\nAdding the two expressions for $I$:\n\n$$ 2I = \\int_{0}^{\\pi/2} \\frac{\\sin^3 x + \\cos^3 x}{\\sin^3 x + \\cos^3 x} dx = \\int_{0}^{\\pi/2} 1 dx = \\frac{\\pi}{2} $$\n\nTherefore, $I = \\frac{\\pi}{4}$.`}
            </ReactMarkdown>
          </div>
        )}

        {activeTab === 'postmortem' && (
          <div className="dashboard-markdown">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {`### Examiner's Post-Mortem\n\nThis is a classic "King's Property" integration problem.\n\nLess than 15% of candidates spotted the symmetry trick immediately. The vast majority attempted Weierstrass substitution ($t = \\tan(x/2)$) which expands into an unmanageable rational function, burning 20+ minutes of exam time for zero marks.\n\n**Key Takeaway**: Always check bounds for symmetry (especially $0$ to $\\pi/2$) before engaging heavy machinery.`}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
