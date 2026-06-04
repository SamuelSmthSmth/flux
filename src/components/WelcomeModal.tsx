import { useState, useEffect, useRef } from "react";

// ── Types ──────────────────────────────────────────────────────
interface Commit {
  sha: string;
  commit: {
    message: string;
    author: { date: string };
  };
}

interface FallbackEntry {
  message: string;
  date: string;
}

// ── GitHub repo (edit these two constants) ─────────────────────
const GITHUB_USER = "SamuelSmthSmth";
const GITHUB_REPO = "misty";

// ── Hardcoded fallback shown when the API is unreachable ───────
const FALLBACK_CHANGELOG: FallbackEntry[] = [
  {
    message: "Misty Beta initialised. Edexcel & AEA past-papers integrated.",
    date: new Date().toISOString(),
  },
  {
    message: "Fields: first-wave theory articles published (Pure Year 1–2).",
    date: new Date().toISOString(),
  },
  {
    message: "Forge: STEP II solutions archive seeded.",
    date: new Date().toISOString(),
  },
];

// ── Tour section data ──────────────────────────────────────────
const TOUR_SECTIONS = [
  {
    name: "Flux",
    icon: "⚡",
    borderColor: "border-indigo-500",
    bgColor: "bg-indigo-500/10",
    hoverBgColor: "hover:bg-indigo-500/20",
    iconColor: "text-indigo-400",
    tagColor: "bg-indigo-500/20 text-indigo-300",
    expandBorderColor: "border-indigo-500/30",
    expandTextColor: "text-indigo-300",
    desc: "The Database. Filter, search, and drill real past-paper questions from Edexcel, AEA, and MAT.",
    howTo:
      "The Purpose: Drill specific, high-level past-paper questions. Stop wasting time finding the right papers—just select your weak areas and immediately start practicing real exam problems.",
  },
  {
    name: "Fields",
    icon: "📐",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-500/10",
    hoverBgColor: "hover:bg-amber-500/20",
    iconColor: "text-amber-400",
    tagColor: "bg-amber-500/20 text-amber-300",
    expandBorderColor: "border-amber-500/30",
    expandTextColor: "text-amber-300",
    desc: "The Theory. Rigorous derivations and proofs bridging the gap between A-Level and University mathematics.",
    howTo:
      "The Purpose: Understand why instead of just how. Fields breaks down core concepts with rigorous derivations, helping you transition from A-Level memorization to undergraduate-level mathematical intuition.",
  },
  {
    name: "Forge",
    icon: "🔥",
    borderColor: "border-rose-500",
    bgColor: "bg-rose-500/10",
    hoverBgColor: "hover:bg-rose-500/20",
    iconColor: "text-rose-400",
    tagColor: "bg-rose-500/20 text-rose-300",
    expandBorderColor: "border-rose-500/30",
    expandTextColor: "text-rose-300",
    desc: "The Challenge. Deep-dive solutions for top-tier entrance exams (STEP, TMUA). Do not look until you've tried.",
    howTo:
      "The Purpose: Push your limits. Forge provides exceptionally difficult problems from elite entrance exams. It's designed to simulate university-level struggle and problem-solving. No quick fixes here.",
  },
];

// ── Helpers ────────────────────────────────────────────────────
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function truncateMessage(msg: string, maxLen = 72): string {
  const first = msg.split("\n")[0];
  return first.length > maxLen ? first.slice(0, maxLen) + "…" : first;
}

/** Animated expanding panel that uses a ref-measured max-height trick */
function ExpandPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight);
  }, [open, children]);

  return (
    <div
      style={{
        maxHeight: open ? `${height}px` : "0px",
        overflow: "hidden",
        transition: "max-height 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Changelog state — unified type so fallback slots in naturally
  const [changelog, setChangelog] = useState<FallbackEntry[]>([]);
  const [changelogLoading, setChangelogLoading] = useState(true);

  // ── Show on first visit ──
  useEffect(() => {
    if (localStorage.getItem("misty_welcomed") === null) {
      setIsVisible(true);
    }
  }, []);

  // ── Fetch commits, fall back gracefully ──
  useEffect(() => {
    if (!isVisible) return;
    let cancelled = false;

    async function fetchCommits() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits?per_page=5`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub ${res.status}`);
        const data: Commit[] = await res.json();
        if (!cancelled) {
          setChangelog(
            data.slice(0, 3).map((c) => ({
              message: c.commit.message,
              date: c.commit.author.date,
            }))
          );
        }
      } catch {
        // Repo private / rate-limited / offline — show polished fallback
        if (!cancelled) setChangelog(FALLBACK_CHANGELOG);
      } finally {
        if (!cancelled) setChangelogLoading(false);
      }
    }

    fetchCommits();
    return () => { cancelled = true; };
  }, [isVisible]);

  // ── Actions ──
  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      localStorage.setItem("misty_welcomed", "true");
    }, 300);
  }

  function handleOpen() {
    setIsVisible(true);
  }

  function toggleCard(name: string) {
    setExpandedCard((prev) => (prev === name ? null : name));
  }

  // ── Render ──
  return (
    <>
      {/* ── Floating Help Button (visible when modal is closed) ── */}
      {!isVisible && (
        <button
          type="button"
          aria-label="Open help & welcome screen"
          className="welcome-help-btn"
          onClick={handleOpen}
        >
          <span className="welcome-help-ping" aria-hidden="true" />
          <span className="welcome-help-inner">?</span>
        </button>
      )}

      {/* ── Modal ── */}
      {isVisible && (
        <div
          className={`welcome-modal-backdrop ${
            isClosing ? "welcome-modal-fade-out" : "welcome-modal-fade-in"
          }`}
          aria-modal="true"
          role="dialog"
          aria-label="Welcome to Misty"
        >
          <div
            className={`welcome-modal-container ${
              isClosing ? "welcome-modal-slide-out" : "welcome-modal-slide-in"
            }`}
          >
            {/* ── Header ── */}
            <div className="welcome-modal-header">
              <div className="welcome-modal-title-row">
                <h1 className="welcome-modal-title">
                  Welcome to{" "}
                  <span className="welcome-modal-title-accent">Misty</span>
                </h1>
                <span className="welcome-modal-beta-badge">BETA</span>
              </div>
              <p className="welcome-modal-subtitle">
                A high-fidelity archive and exploration tool for advanced
                mathematics.
              </p>
            </div>

            {/* ── Bento Grid ── */}
            <div className="welcome-modal-grid">

              {/* Left — Tour cards */}
              <div className="welcome-modal-tour">
                <p className="welcome-modal-section-label">
                  What's inside{" "}
                  <span className="welcome-section-label-hint">
                    — tap a card to learn more
                  </span>
                </p>
                <div className="welcome-modal-tour-cards">
                  {TOUR_SECTIONS.map((section) => {
                    const isOpen = expandedCard === section.name;
                    return (
                      <div
                        key={section.name}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                        className={`welcome-tour-card border-l-4 ${section.borderColor} ${section.bgColor} ${section.hoverBgColor} ${isOpen ? "welcome-tour-card--open" : ""}`}
                        onClick={() => toggleCard(section.name)}
                        onKeyDown={(e) =>
                          (e.key === "Enter" || e.key === " ") &&
                          toggleCard(section.name)
                        }
                      >
                        <div className="welcome-tour-card-top">
                          <span className={`welcome-tour-icon ${section.iconColor}`}>
                            {section.icon}
                          </span>
                          <span className={`welcome-tour-tag ${section.tagColor}`}>
                            {section.name}
                          </span>
                          <span
                            className={`welcome-tour-chevron ${isOpen ? "welcome-tour-chevron--open" : ""}`}
                            aria-hidden="true"
                          >
                            ›
                          </span>
                        </div>

                        <p className="welcome-tour-desc">{section.desc}</p>

                        {/* Expandable how-to panel */}
                        <ExpandPanel open={isOpen}>
                          <div
                            className={`welcome-tour-howto border-t ${section.expandBorderColor}`}
                          >
                            <p className={`welcome-tour-howto-text ${section.expandTextColor}`}>
                              {section.howTo}
                            </p>
                          </div>
                        </ExpandPanel>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right — Changelog */}
              <div className="welcome-modal-changelog">
                <p className="welcome-modal-section-label">Latest Transmissions</p>
                <div className="welcome-changelog-inner">
                  {changelogLoading ? (
                    <div className="welcome-changelog-loading">
                      <div className="welcome-changelog-skeleton" />
                      <div className="welcome-changelog-skeleton" style={{ width: "75%" }} />
                      <div className="welcome-changelog-skeleton" style={{ width: "60%" }} />
                    </div>
                  ) : (
                    <ul className="welcome-changelog-list">
                      {changelog.map((entry, i) => (
                        <li key={i} className="welcome-changelog-item">
                          <span className="welcome-changelog-date">
                            {formatDate(entry.date)}
                          </span>
                          <span className="welcome-changelog-msg">
                            {truncateMessage(entry.message)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="welcome-changelog-footer">
                    <span className="welcome-changelog-dot" />
                    <span className="welcome-changelog-footer-text">
                      github.com/{GITHUB_USER}/{GITHUB_REPO}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Beta Warning ── */}
            <div className="welcome-modal-warning">
              <span className="welcome-modal-warning-icon">⚠️</span>
              <p className="welcome-modal-warning-text">
                Misty is in active development. Content may be incomplete or
                subject to change. Report issues via the GitHub repository.
              </p>
            </div>

            {/* ── Actions ── */}
            <div className="welcome-modal-actions">
              <button
                type="button"
                className="welcome-modal-cta"
                onClick={handleClose}
              >
                <span>Enter the Mist</span>
                <span className="welcome-modal-cta-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
