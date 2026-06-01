import { useState, useEffect, useRef, useMemo } from "react";
import { doc, getDoc, collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./App.css";
import { Analytics } from '@vercel/analytics/react';
import Dashboard from './components/Dashboard';

// ─── Firestore Metadata Index ─────────────────────────────────
interface MetadataIndex {
  boards: string[];
  years: string[];
  topics: Record<string, string[]>;
  activeFilters?: Record<string, Record<string, string[]>>;
}

function useMetadataIndex() {
  const [metadata, setMetadata] = useState<MetadataIndex | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchMetadata() {
      try {
        const docRef = doc(db, "sys_config", "metadata_index");
        const snap = await getDoc(docRef);
        if (cancelled) return;
        if (snap.exists()) {
          setMetadata(snap.data() as MetadataIndex);
        } else {
          setError("Metadata index not found in database.");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load metadata.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchMetadata();
    return () => { cancelled = true; };
  }, []);

  return { metadata, loading, error };
}

// ─── Types ────────────────────────────────────────────────────
type Mode = "Flux" | "Fields" | "Forge";
type Theme = "light" | "dark";
type ActiveState = "setup" | "playing-fields" | "viewing-paper" | "generating-pdf";
type WorkspaceTab = "none" | "mark_scheme" | "examiner_report";

const MODE_MATH: Record<Mode, { glyph: string; notation: string }> = {
  Flux: { glyph: "∂", notation: "∂f/∂x" },
  Fields: { glyph: "∫", notation: "∮ f · dr" },
  Forge: { glyph: "∑", notation: "∑ᵢ aᵢ" },
};

const INTRO_DURATION_MS = 1000;
const MODE_SWITCH_OUT_MS = INTRO_DURATION_MS / 2;
const MODE_SWITCH_IN_MS = INTRO_DURATION_MS / 2;

// EXAM_BOARDS is now loaded dynamically from Firestore metadata_index.
// Kept as a fallback if the database fetch fails.
const EXAM_BOARDS_FALLBACK = [
  "Edexcel",
  "AQA",
  "OCR",
  "MEI",
  "TMUA",
  "STEP",
  "AEA",
] as const;

// Boards classified as "Standard" (e.g. Edexcel, AQA, OCR, MEI).
// Everything not in this set is treated as an advanced / competition board.
const STANDARD_BOARDS = new Set([
  "Edexcel", 
  "AQA", 
  "OCR", 
  "TMUA", 
  "MAT", 
  "PAT",
  "ESAT"
]);

// Boards classified as physics-only or shared with physics
const PHYSICS_ONLY_BOARDS = new Set(["PAT", "ESAT"]);
const SHARED_BOARDS = new Set(["Edexcel", "AQA", "OCR"]);

// ─── Dummy Data ───────────────────────────────────────────────



// ─── Reusable Components ──────────────────────────────────────

/** Pill-shaped binary/multi toggle switch */
function PillToggle({
  options,
  value,
  onChange,
  disabled,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  const activeIndex = Math.max(0, options.indexOf(value));
  return (
    <div className={`pill-toggle ${disabled ? "disabled" : ""}`}>
      <div 
        className="pill-toggle-slider" 
        style={{ 
          width: `calc((100% - 6px) / ${options.length})`, 
          left: `calc(3px + (100% - 6px) / ${options.length} * ${activeIndex})`
        }} 
      />
      {options.map((opt) => (
        <button
          key={opt}
          className={`pill-toggle-option ${value === opt ? "active" : ""}`}
          onClick={() => { if (!disabled) onChange(opt); }}
          type="button"
          disabled={disabled}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}





/** Helper to ensure block math renders correctly by adding newlines */
const formatMathText = (text: string) => {
  if (!text) return "";
  // Ensure $$ are surrounded by newlines, handling both start and end
  return text.replace(/\$\$(.*?)\$\$/gs, (_, p1) => `\n$$\n${p1.trim()}\n$$\n`);
};

/** Expandable reveal section for mark schemes / examiner notes */
function ExpandableSection({
  title,
  icon,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  icon: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, content]);

  return (
    <div className="expandable">
      <button
        className={`expandable-trigger ${isOpen ? "open" : ""}`}
        onClick={onToggle}
        type="button"
      >
        <span className="expandable-icon">{icon}</span>
        <span>{title}</span>
        <span className={`expandable-chevron ${isOpen ? "open" : ""}`}>›</span>
      </button>
      <div
        className="expandable-body"
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
      >
        <div className="expandable-content" ref={contentRef}>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {formatMathText(content)}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

/** A single question card used in both Flux/Forge viewer and Bee arena */
function QuestionCard({
  question,
  showExpandables,
  onActivateWorkspace,
  activeWorkspace,
}: {
  question: any;
  showExpandables: boolean;
  onActivateWorkspace?: (tab: WorkspaceTab, id: string) => void;
  activeWorkspace?: WorkspaceTab;
}) {
  const [showMarkScheme, setShowMarkScheme] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const leftHeader = question.subtopic !== undefined
    ? `${question.topic} • ${question.subtopic === "" ? "General" : question.subtopic}`
    : question.topic;

  const rightHeader = (question.year !== undefined || question.difficulty !== undefined)
    ? `${question.year ?? ""} • ${question.difficulty ?? ""}`.replace(/^ • | • $/g, "")
    : `${question.marks ?? 0} marks`;

  const problemText = question.problem_markdown ?? question.question ?? "";
  const markSchemeText = question.mark_scheme_markdown ?? question.markScheme ?? "";
  const examinerReportText = question.examiner_report_markdown ?? question.examinerNotes ?? "";

  return (
    <div className="question-card">
      <div className="question-card-header">
        <span className="question-card-topic">{leftHeader}</span>
        <span className="question-card-marks">{rightHeader}</span>
      </div>
      <div className="question-card-text">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {formatMathText(problemText)}
        </ReactMarkdown>
      </div>
      {showExpandables && (
        <div className="question-card-expandables">
          {onActivateWorkspace ? (
            <div className="workspace-triggers">
              {markSchemeText && (
                <button
                  className={`btn-workspace ${activeWorkspace === "mark_scheme" ? "active" : ""}`}
                  onClick={() => onActivateWorkspace(activeWorkspace === "mark_scheme" ? "none" : "mark_scheme", question.id)}
                  type="button"
                >
                  📋 Mark Scheme
                </button>
              )}
              {examinerReportText && (
                <button
                  className={`btn-workspace ${activeWorkspace === "examiner_report" ? "active" : ""}`}
                  onClick={() => onActivateWorkspace(activeWorkspace === "examiner_report" ? "none" : "examiner_report", question.id)}
                  type="button"
                >
                  📝 Examiner Report
                </button>
              )}
            </div>
          ) : (
            <>
              {markSchemeText && (
                <ExpandableSection
                  title="Mark Scheme"
                  icon="📋"
                  content={markSchemeText}
                  isOpen={showMarkScheme}
                  onToggle={() => setShowMarkScheme((v) => !v)}
                />
              )}
              {examinerReportText && (
                <ExpandableSection
                  title="Examiner Notes"
                  icon="📝"
                  content={examinerReportText}
                  isOpen={showNotes}
                  onToggle={() => setShowNotes((v) => !v)}
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────

function App() {
  // --- Global state ---
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("misty-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [activeMode, setActiveMode] = useState<Mode>("Flux");
  const [modePhase, setModePhase] = useState<"idle" | "out" | "in">("idle");
  const [pendingMode, setPendingMode] = useState<Mode | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [activeState, setActiveState] = useState<ActiveState>("setup");
  
  // --- Workspace State ---
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<WorkspaceTab>("none");
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);



  // --- Right panel: shared ---
  const [selectedTier, setSelectedTier] = useState<'standard' | 'advanced'>('standard');
  const [examBoard, setExamBoard] = useState("Edexcel");

  // --- Firestore metadata-driven filter state ---
  const { metadata, loading: metadataLoading, error: metadataError } = useMetadataIndex();
  const [selectedDbTopic, setSelectedDbTopic] = useState("");
  const [selectedDbSubtopics, setSelectedDbSubtopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // --- Dynamic Firestore Questions list, loader, and error states ---
  const [questionsList, setQuestionsList] = useState<any[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);

  // Reset subtopics when topic or board changes
  useEffect(() => {
    setSelectedDbSubtopics([]);
  }, [selectedDbTopic, examBoard]);


  // Derive available boards from metadata (with fallback)
  const availableBoards = metadata?.boards ?? [...EXAM_BOARDS_FALLBACK];

  // Filter boards by the current tier selection
  const filteredBoards = availableBoards.filter((b) => {
    const matchesTier = selectedTier === 'advanced'
      ? !STANDARD_BOARDS.has(b)
      : STANDARD_BOARDS.has(b);
    return matchesTier && !PHYSICS_ONLY_BOARDS.has(b);
  });


  // Filter topics & subtopics by the search query
  const filteredTopics = useMemo(() => {
    if (!metadata) return {} as Record<string, string[]>;
    
    let boardFilters = metadata.topics;
    if (metadata.activeFilters) {
      boardFilters = metadata.activeFilters[examBoard];
      if (!boardFilters) return {}; // Board has no questions
    }

    const q = searchQuery.trim().toLowerCase();
    if (!q) return boardFilters;

    const result: Record<string, string[]> = {};
    for (const [topic, subtopics] of Object.entries(boardFilters)) {
      const topicMatches = topic.toLowerCase().includes(q);
      const matchingSubtopics = subtopics.filter((st) => {
        const displayName = st === "" ? "general" : st.toLowerCase();
        return displayName.includes(q);
      });
      if (topicMatches) {
        // Topic name matches — include it with all its subtopics
        result[topic] = subtopics;
      } else if (matchingSubtopics.length > 0) {
        // Subtopic(s) match — include parent topic with only matching subtopics
        result[topic] = matchingSubtopics;
      }
    }
    return result;
  }, [metadata, searchQuery, examBoard]);

  const handleSubtopicToggle = (subtopic: string) => {
    if (activeMode === "Flux") {
      setSelectedDbSubtopics([subtopic]);
    } else if (activeMode === "Forge") {
      setSelectedDbSubtopics((prev) =>
        prev.includes(subtopic)
          ? prev.filter((st) => st !== subtopic)
          : [...prev, subtopic]
      );
    }
  };

  // --- Theme persistence ---
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("misty-theme", theme);
  }, [theme]);

  // --- Intro splash on each load ---
  useEffect(() => {
    if (!showIntro) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setShowIntro(false);
      return;
    }
    const t = window.setTimeout(() => setShowIntro(false), INTRO_DURATION_MS);
    return () => clearTimeout(t);
  }, [showIntro]);

  const switchMode = (mode: Mode) => {
    if (mode === activeMode || modePhase === "out") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setActiveMode(mode);
      handleExitActive();
      return;
    }
    setPendingMode(mode);
    setModePhase("out");
    window.setTimeout(() => {
      setActiveMode(mode);
      handleExitActive();
      setModePhase("in");
      window.setTimeout(() => {
        setModePhase("idle");
        setPendingMode(null);
      }, MODE_SWITCH_IN_MS);
    }, MODE_SWITCH_OUT_MS);
  };



  // --- Toggle helpers ---
  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));



  // --- Cascading Logic: tier selection drives which boards are shown ---
  useEffect(() => {
    const boards = availableBoards.filter((b) => {
      const matchesTier = selectedTier === 'advanced'
        ? !STANDARD_BOARDS.has(b)
        : STANDARD_BOARDS.has(b);
      return matchesTier && !PHYSICS_ONLY_BOARDS.has(b);
    });
    if (boards.length > 0 && !boards.includes(examBoard)) {
      setExamBoard(boards[0]);
    }
  }, [selectedTier, availableBoards]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Action handlers ---
  const handleExitActive = () => {
    setActiveState("setup");
  };


  const generateQuestions = async () => {
    setLoadingQuestions(true);
    setQueryError(null);
    try {
      const qConstraints: any[] = [];
      
      qConstraints.push(where("board", "==", examBoard));
      qConstraints.push(where("topic", "==", selectedDbTopic));
      qConstraints.push(where("difficulty", "==", selectedTier === 'standard' ? 'Standard' : 'Advanced'));
      
      if (selectedDbSubtopics.length > 0) {
        if (selectedDbSubtopics.length === 1) {
          qConstraints.push(where("subtopic", "==", selectedDbSubtopics[0]));
        } else {
          qConstraints.push(where("subtopic", "in", selectedDbSubtopics));
        }
      }

      const q = query(
        collection(db, "questions"),
        ...qConstraints,
        limit(10)
      );

      const querySnapshot = await getDocs(q);
      const fetchedQuestions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setQuestionsList(fetchedQuestions);
      setActiveState("viewing-paper");
    } catch (err) {
      console.error("Error fetching questions: ", err);
      setQueryError(err instanceof Error ? err.message : "An error occurred while fetching questions.");
    } finally {
      setLoadingQuestions(false);
    }
  };







  // --- Hide side panels during active states ---
  const showPanels = activeState === "setup";

  // Theme follows destination mode immediately during switch transitions
  const themeMode = pendingMode ?? activeMode;

  // ───────────────────────────────────────────────────────────────
  // RENDER
  // ───────────────────────────────────────────────────────────────

  return (
    <div className={`misty-app misty-theme-${themeMode.toLowerCase()}`}>
      {/* Ambient background glow */}
      <div className="background-glow" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      {/* ─── Header ─── */}
      <header className="header">
        <div className="header-brand">
          <span className="header-logo">
            <span className="header-logo-accent">Misty</span>
          </span>
        </div>

        {/* Mode Switcher */}
        <div className="mode-switcher">
          {(["Flux", "Fields", "Forge"] as Mode[]).map((mode) => (
            <button
              key={mode}
              className={`mode-btn ${themeMode === mode ? "active" : ""}`}
              onClick={() => switchMode(mode)}
              type="button"
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <div className="header-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      {/* ─── Main Content Area ─── */}
      <div
        className={`main-layout mode-viewport mode-phase-${modePhase} h-[calc(100vh-64px)] overflow-hidden`}
      >
        {activeMode === "Flux" ? (
          <>
            {/* ── Left Panel ── */}
            {showPanels && (
              <aside className="panel panel-left">
            {metadataLoading ? (
              <>
                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Topic</span>
                    <div className="skeleton-select" />
                  </div>
                </div>
                <div className="panel-section flex-grow">
                  <span className="panel-section-title" style={{ display: "block", marginBottom: "14px" }}>
                    Subtopics
                  </span>
                  <div className="skeleton-list">
                    <div className="skeleton-list-item" />
                    <div className="skeleton-list-item" />
                    <div className="skeleton-list-item" />
                  </div>
                </div>
              </>
            ) : metadataError ? (
              <div className="panel-section">
                <div className="metadata-error">
                  <span className="metadata-error-icon">⚠</span>
                  <span className="metadata-error-text">{metadataError}</span>
                </div>
              </div>
            ) : (
              <>
                {/* Search Input */}
                <div className="topic-search-container">
                  <div className="topic-search-wrapper">
                    <input
                      className="topic-search-input"
                      type="text"
                      placeholder="Search topics or subtopics…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="topic-search-icon">🔍</span>
                    {searchQuery && (
                      <button
                        className="topic-search-clear"
                        onClick={() => setSearchQuery("")}
                        type="button"
                        aria-label="Clear search"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Topic Browser */}
                <div className="topic-browser">
                  {Object.keys(filteredTopics).length === 0 ? (
                    searchQuery ? (
                      <div className="topic-no-results">
                        No topics or subtopics match "<strong>{searchQuery}</strong>".
                      </div>
                    ) : (
                      <div className="topic-no-results">
                        No questions available for this board yet.
                      </div>
                    )
                  ) : (
                    Object.keys(filteredTopics).sort().map((topic) => {
                      const subtopics = filteredTopics[topic];
                      const isActive = selectedDbTopic === topic;
                      const isExpanded = isActive;
                      const q = searchQuery.trim().toLowerCase();

                      const highlightText = (text: string) => {
                        if (!q) return text;
                        const idx = text.toLowerCase().indexOf(q);
                        if (idx === -1) return text;
                        return (
                          <>
                            {text.slice(0, idx)}
                            <span className="search-highlight">{text.slice(idx, idx + q.length)}</span>
                            {text.slice(idx + q.length)}
                          </>
                        );
                      };

                      return (
                        <div
                          key={topic}
                          className={`topic-group${isExpanded ? " expanded" : ""}`}
                        >
                          <div
                            className={`topic-group-header${isActive ? " active" : ""}`}
                            onClick={() => {
                              if (selectedDbTopic === topic) {
                                setSelectedDbTopic("");
                              } else {
                                setSelectedDbTopic(topic);
                              }
                            }}
                          >
                            <span className="topic-group-chevron">▶</span>
                            <span className="topic-group-name">{highlightText(topic)}</span>
                            <span className="topic-group-count">{subtopics.length}</span>
                          </div>

                          {isExpanded && subtopics.length > 0 && (
                            <div className="topic-group-subtopics">
                              {subtopics.map((st, i) => {
                                const isSelected = selectedDbSubtopics.includes(st);
                                const displayName = st === "" ? "General" : st;
                                return (
                                  <div
                                    key={`${st}-${i}`}
                                    className={`nested-subtopic-item${isSelected ? " selected" : ""}`}
                                    onClick={() => handleSubtopicToggle(st)}
                                  >
                                      <div className="radio-circle">
                                        <div className="radio-dot" />
                                      </div>
                                    <span className="nested-subtopic-name">{highlightText(displayName)}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </>
            )}
          </aside>
        )}

        {/* ── Center Stage ── */}
        <main className="center-stage">
          {/* ═══ SETUP STATES ═══ */}
          {activeState === "setup" && (
            <>
              {activeMode === "Flux" && (
                <div className="center-content" key="flux-setup">
                  <h2 className="center-title">Hyper-Precise Question Finder</h2>
                  <p className="center-subtitle">
                    Instantly find individual questions from real A-Level past papers, precisely indexed by topic and sub-topic. Select your parameters on the left and filters on the right to grab exactly the practice you need.
                  </p>
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={generateQuestions}
                    disabled={loadingQuestions || !selectedDbTopic}
                  >
                    {loadingQuestions ? (
                      <>
                        <span className="btn-spinner" />
                        Finding...
                      </>
                    ) : (
                      <>
                        <span>✦</span> Find Questions
                      </>
                    )}
                  </button>
                  {queryError && (
                    <div className="error-message" style={{ marginTop: "12px", color: "var(--danger-color)" }}>
                      {queryError}
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* ═══ BEE ACTIVE STATE ═══ */}


          {/* ═══ PDF GENERATING STATE ═══ */}
          {activeState === "generating-pdf" && (
            <div className="center-content" key="pdf-loading">
              <div className="pdf-loader">
                <div className="pdf-spinner" />
                <h2 className="center-title">Generating PDF…</h2>
                <p className="center-subtitle">
                  Compiling your paper with selected topics and exam board
                  specifications.
                </p>
              </div>
            </div>
          )}

          {/* ═══ PAPER VIEWER STATE (Flux + Forge) ═══ */}
          {activeState === "viewing-paper" && (
            <div className={`twin-pane-container ${activeWorkspaceTab !== "none" ? "split-active" : ""}`} key="paper-view">
              <div className="twin-pane-left">
                <div className="paper-viewer-header">
                  <div>
                    <h2 className="paper-viewer-title">
                      Generated Questions
                    </h2>
                    <p className="paper-viewer-meta">
                      {questionsList.length} {questionsList.length === 1 ? "question" : "questions"} • Mathematics • {examBoard} • {selectedDbTopic || "All Topics"}{selectedDbSubtopics.length > 0 ? ` (${selectedDbSubtopics.map(st => st === "" ? "General" : st).join(", ")})` : ""} • {selectedTier === 'standard' ? 'Standard' : 'Advanced'}
                    </p>
                  </div>
                  <button
                    className="btn-ghost"
                    type="button"
                    onClick={handleExitActive}
                  >
                    ← Back to Setup
                  </button>
                </div>

                <div className="paper-viewer-questions">
                  {questionsList.length === 0 ? (
                    <div className="no-questions-found">
                      <div className="no-questions-icon">🔍</div>
                      <h3>No Questions Found</h3>
                      <p>
                        We couldn't find any questions matching your current configuration. Try selecting a different topic, subtopic, or exam board.
                      </p>
                    </div>
                  ) : (
                    questionsList.map((q, i) => (
                      <div className="paper-question-wrapper" key={q.id}>
                        <span className="paper-question-number">
                          Question {i + 1}
                        </span>
                        <QuestionCard 
                          question={q} 
                          showExpandables={true}
                          onActivateWorkspace={(tab, id) => {
                            setActiveWorkspaceTab(tab);
                            setActiveQuestionId(id);
                          }}
                          activeWorkspace={activeQuestionId === q.id ? activeWorkspaceTab : "none"}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>

              {activeWorkspaceTab !== "none" && activeQuestionId && (
                <div className="twin-pane-right">
                  <div className="workspace-tab-bar">
                    <button 
                      className={`workspace-tab-btn ${activeWorkspaceTab === "mark_scheme" ? "active" : ""}`}
                      onClick={() => setActiveWorkspaceTab("mark_scheme")}
                    >
                      Mark Scheme
                    </button>
                    <button 
                      className={`workspace-tab-btn ${activeWorkspaceTab === "examiner_report" ? "active" : ""}`}
                      onClick={() => setActiveWorkspaceTab("examiner_report")}
                    >
                      Examiner Report
                    </button>
                    <button 
                      className="workspace-tab-close"
                      onClick={() => {
                        setActiveWorkspaceTab("none");
                        setActiveQuestionId(null);
                      }}
                      title="Close Workspace"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="workspace-content">
                    {(() => {
                      const q = questionsList.find(q => q.id === activeQuestionId);
                      if (!q) return <div className="workspace-empty">Question not found.</div>;
                      
                      const content = activeWorkspaceTab === "mark_scheme" 
                        ? (q.mark_scheme_markdown ?? q.markScheme ?? "*No mark scheme available for this question.*")
                        : (q.examiner_report_markdown ?? q.examinerNotes ?? "*No examiner report available for this question.*");
                        
                      return (
                        <div className="workspace-markdown">
                          <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                          >
                            {formatMathText(content)}
                          </ReactMarkdown>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          )}
        </main>

        {/* ── Right Panel ── */}
        {showPanels && (
          <aside className="panel panel-right">
            <div className="settings-header">{activeMode} Settings</div>

            {/* ─── Flux Settings ─── */}
            {activeMode === "Flux" && (
              <>
                <div className="panel-section">
                  <div className="flex flex-col gap-4 w-full mb-8">
                    {/* Standard Button */}
                    <div
                      onClick={() => setSelectedTier('standard')}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                        selectedTier === 'standard'
                          ? 'bg-slate-800 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                          : 'bg-transparent border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600'
                      }`}
                    >
                      <h3 className="text-lg font-semibold tracking-wide text-slate-200 mb-1">Standard</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Core A-Level Mathematics syllabus and structured topic questions.
                      </p>
                    </div>

                    {/* Advanced Button */}
                    <div
                      onClick={() => setSelectedTier('advanced')}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                        selectedTier === 'advanced'
                          ? 'bg-slate-800 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                          : 'bg-transparent border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600'
                      }`}
                    >
                      <h3 className="text-lg font-semibold tracking-wide text-slate-200 mb-1">Advanced</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Further Mathematics, STEP, AEA, and hardcore extension challenges.
                      </p>
                    </div>
                  </div>
                </div>

                {metadataLoading ? (
                  <div className="panel-section">
                    <div className="setting-group">
                      <span className="setting-label">Exam Board / Paper Type</span>
                      <div className="skeleton-list">
                        <div className="skeleton-list-item" />
                        <div className="skeleton-list-item" />
                        <div className="skeleton-list-item" />
                      </div>
                    </div>
                  </div>
                ) : metadataError ? (
                  <div className="panel-section">
                    <div className="metadata-error">
                      <span className="metadata-error-icon">⚠</span>
                      <span className="metadata-error-text">{metadataError}</span>
                    </div>
                  </div>
                ) : (
                  <div className="panel-section">
                    <div className="setting-group">
                      <span className="setting-label">Exam Board / Paper Type</span>
                      <div className="subtopic-radio-list">
                        {filteredBoards.map((b) => {
                          const isSelected = examBoard === b;
                          return (
                            <div
                              key={b}
                              className={`subtopic-radio-item ${isSelected ? "selected" : ""}`}
                              onClick={() => setExamBoard(b)}
                            >
                              <div className="radio-circle">
                                <div className="radio-dot" />
                              </div>
                              <span className="subtopic-radio-label">{b}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

          </aside>
        )}
          </>
        ) : (
          <Dashboard 
            mode={activeMode as "Fields" | "Forge"} 
            setMode={(m) => setActiveMode(m)} 
          />
        )}
      </div>

      {pendingMode && modePhase !== "idle" && (
        <div
          className={`mode-transition misty-theme-${pendingMode.toLowerCase()} mode-transition-${modePhase}`}
          aria-hidden="true"
        >
          <div className="mode-transition-mist" />
          <span className="mode-transition-glyph">{MODE_MATH[pendingMode].glyph}</span>
          <div className="mode-transition-center">
            <span className="mode-transition-title">
              {pendingMode.split("").map((char, i) => (
                <span
                  key={`${char}-${i}`}
                  className="mode-transition-letter"
                  style={{ ["--letter-i" as string]: i }}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="mode-transition-notation">{MODE_MATH[pendingMode].notation}</span>
          </div>
        </div>
      )}

      {showIntro && (
        <div className="misty-intro" aria-hidden="true">
          <div className="misty-intro-mist" />
          <span className="misty-intro-logo">
            {"Misty".split("").map((char, i) => (
              <span
                key={`${char}-${i}`}
                className="misty-intro-letter"
                style={{ ["--letter-i" as string]: i }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
      )}

      <Analytics />
    </div>
  );
}

export default App;