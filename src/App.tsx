import { useState, useEffect, useRef, useMemo } from "react";
import { doc, getDoc, collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./App.css";

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
type Mode = "Flux" | "Bee" | "Forge";
type Theme = "light" | "dark";
type ActiveState = "setup" | "playing-bee" | "viewing-paper" | "generating-pdf";



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

const DUMMY_QUESTIONS = [
  {
    id: 1,
    topic: "Integration",
    question: "Using integration by parts, evaluate ∫ x² eˣ dx.",
    marks: 6,
    markScheme:
      "M1: Identifies u = x², dv = eˣ dx and applies integration by parts.\nA1: First application gives x²eˣ − 2∫ xeˣ dx.\nM1: Applies integration by parts a second time to ∫ xeˣ dx.\nA1: Obtains xeˣ − eˣ.\nM1: Combines all terms correctly.\nA1: Final answer x²eˣ − 2xeˣ + 2eˣ + C.",
    examinerNotes:
      "Many candidates forgot to apply integration by parts twice, stopping after the first iteration. A significant number also omitted the constant of integration. Well-prepared students completed this efficiently in under 4 minutes.",
  },
  {
    id: 2,
    topic: "Differentiation",
    question:
      "A curve is defined by the equation y = (3x² − 1) / (2x + 5). Find dy/dx and determine the coordinates of any stationary points.",
    marks: 8,
    markScheme:
      "M1: Applies the quotient rule correctly.\nA1: dy/dx = (6x(2x+5) − 2(3x²−1)) / (2x+5)².\nA1: Simplifies to (6x² + 30x + 2) / (2x+5)².\nM1: Sets numerator equal to zero for stationary points.\nA1: Solves 6x² + 30x + 2 = 0 using the quadratic formula.\nA1: Correct x-coordinates.\nM1: Substitutes back to find y-coordinates.\nA1: Both stationary points stated correctly.",
    examinerNotes:
      "The quotient rule was generally well applied. Common errors included sign mistakes during simplification of the numerator and failure to fully simplify the quadratic. Some candidates used the product rule on y = (3x²−1)(2x+5)⁻¹ which was equally acceptable.",
  },
  {
    id: 3,
    topic: "Vectors",
    question:
      "Points A, B, and C have position vectors a = 2i + 3j − k, b = 4i − j + 2k, and c = i + 5j + 3k respectively. Show that angle BAC = arccos(−7/√(798)).",
    marks: 5,
    markScheme:
      "M1: Finds vectors AB = b − a and AC = c − a.\nA1: AB = 2i − 4j + 3k, AC = −i + 2j + 4k.\nM1: Calculates dot product AB · AC.\nA1: AB · AC = −2 − 8 + 12 = 2… (continues to verify given result).\nA1: Correctly applies cos θ = (AB · AC) / (|AB| × |AC|) and confirms given expression.",
    examinerNotes:
      "This was a 'show that' question, so candidates needed to present clear working. Marks were lost when students jumped to the answer without showing intermediate vector calculations. Direction of vectors (AB vs BA) was a common source of sign errors.",
  },
];

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



/** Small on/off toggle for include/exclude options */
function MiniToggle({
  label,
  on,
  onToggle,
}: {
  label: string;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mini-toggle" onClick={onToggle}>
      <span className="mini-toggle-label">{label}</span>
      <div className={`mini-toggle-track ${on ? "on" : ""}`}>
        <div className="mini-toggle-thumb" />
      </div>
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
}: {
  question: any;
  showExpandables: boolean;
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
  const [activeState, setActiveState] = useState<ActiveState>("setup");



  // --- Right panel: shared ---
  const [subject, setSubject] = useState("Mathematics");
  const [examBoard, setExamBoard] = useState("Edexcel");
  const [difficulty, setDifficulty] = useState("Standard");

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

  // Filter boards by the current difficulty and subject selection
  const filteredBoards = availableBoards.filter((b) => {
    const matchesDifficulty = difficulty === "Advanced"
      ? !STANDARD_BOARDS.has(b)
      : STANDARD_BOARDS.has(b);
    if (!matchesDifficulty) return false;

    if (subject === "Physics") {
      return PHYSICS_ONLY_BOARDS.has(b) || SHARED_BOARDS.has(b);
    } else {
      return !PHYSICS_ONLY_BOARDS.has(b);
    }
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

  // --- Right panel: Bee-specific ---
  const [beeTimeLimit, setBeeTimeLimit] = useState(3);
  const [beeQuestionCount, setBeeQuestionCount] = useState(10);

  // --- Right panel: Forge-specific ---
  const [forgeQuestionCount, setForgeQuestionCount] = useState(12);
  const [forgeDuration, setForgeDuration] = useState("2");
  const [forgeShowThat, setForgeShowThat] = useState(true);
  const [forgeMultipleChoice, setForgeMultipleChoice] = useState(false);

  // --- Bee timer state ---
  const [beeTimeRemaining, setBeeTimeRemaining] = useState(0);
  const [beeCurrentQ, setBeeCurrentQ] = useState(0);
  const beeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // --- Theme persistence ---
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("misty-theme", theme);
  }, [theme]);

  // --- Bee countdown timer ---
  useEffect(() => {
    if (activeState === "playing-bee" && beeTimeRemaining > 0) {
      beeTimerRef.current = setInterval(() => {
        setBeeTimeRemaining((t) => {
          if (t <= 1) {
            if (beeTimerRef.current) clearInterval(beeTimerRef.current);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (beeTimerRef.current) clearInterval(beeTimerRef.current);
    };
  }, [activeState, beeTimeRemaining > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Toggle helpers ---
  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));



  // --- Cascading Logic: difficulty & subject drive which boards are shown ---
  useEffect(() => {
    const boards = availableBoards.filter((b) => {
      const matchesDifficulty = difficulty === "Advanced"
        ? !STANDARD_BOARDS.has(b)
        : STANDARD_BOARDS.has(b);
      if (!matchesDifficulty) return false;

      if (subject === "Physics") {
        return PHYSICS_ONLY_BOARDS.has(b) || SHARED_BOARDS.has(b);
      } else {
        return !PHYSICS_ONLY_BOARDS.has(b);
      }
    });
    if (boards.length > 0 && !boards.includes(examBoard)) {
      setExamBoard(boards[0]);
    }
  }, [difficulty, subject, availableBoards]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Action handlers ---
  const handleStartBee = () => {
    setBeeTimeRemaining(beeTimeLimit * 60);
    setBeeCurrentQ(0);
    setActiveState("playing-bee");
  };

  const handleNextBeeQuestion = () => {
    setBeeCurrentQ((q) => (q + 1) % DUMMY_QUESTIONS.length);
  };

  const handleExitActive = () => {
    setActiveState("setup");
    if (beeTimerRef.current) clearInterval(beeTimerRef.current);
  };


  const generateQuestions = async () => {
    setLoadingQuestions(true);
    setQueryError(null);
    try {
      const qConstraints: any[] = [];
      
      qConstraints.push(where("board", "==", examBoard));
      qConstraints.push(where("topic", "==", selectedDbTopic));
      qConstraints.push(where("difficulty", "==", difficulty));
      
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

  const handleBuildPdf = async () => {
    setActiveState("generating-pdf");
    try {
      // Simulate build processing time
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await generateQuestions();
    } catch (e) {
      setActiveState("setup");
    }
  };



  // --- Format timer ---
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const beeProgress =
    beeTimeLimit * 60 > 0
      ? (beeTimeRemaining / (beeTimeLimit * 60)) * 100
      : 0;

  // --- Hide side panels during active states ---
  const showPanels = activeState === "setup";

  // ───────────────────────────────────────────────────────────────
  // RENDER
  // ───────────────────────────────────────────────────────────────

  return (
    <div className={`misty-app misty-theme-${activeMode.toLowerCase()}`}>
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
          {(["Flux", "Bee", "Forge"] as Mode[]).map((mode) => (
            <button
              key={mode}
              className={`mode-btn ${activeMode === mode ? "active" : ""}`}
              onClick={() => {
                setActiveMode(mode);
                handleExitActive();
              }}
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

      {/* ─── Main 3-pane layout ─── */}
      <div className="main-layout">
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
                                    {activeMode === "Forge" ? (
                                      <div className={`checkbox-square ${isSelected ? "checked" : ""}`}>
                                        <div className="checkbox-check" />
                                      </div>
                                    ) : (
                                      <div className="radio-circle">
                                        <div className="radio-dot" />
                                      </div>
                                    )}
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
                  <h2 className="center-title">Ready to Generate</h2>
                  <p className="center-subtitle">
                    Select your topics on the left, configure filters on the
                    right, then hit generate to create your custom practice set.
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
                        Generating...
                      </>
                    ) : (
                      <>
                        <span>✦</span> Generate Questions
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

              {activeMode === "Bee" && (
                <div className="center-content" key="bee-setup">
                  <h2 className="center-title">Misty Bee</h2>
                  <p className="center-subtitle">
                    Race against the clock. Solve as many problems as you can
                    before time runs out.
                  </p>
                  <button
                    className="btn-danger"
                    onClick={handleStartBee}
                    type="button"
                  >
                    ▶ Start Bee
                  </button>
                </div>
              )}

              {activeMode === "Forge" && (
                <div className="center-content" key="forge-setup">
                  <h2 className="center-title">Paper Forger</h2>
                  <p className="center-subtitle">
                    Compile a full A-Level standard paper from your selected
                    topics and exam board specifications.
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
                        Forging...
                      </>
                    ) : (
                      <>
                        <span>⚒</span> Forge Paper
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
          {activeState === "playing-bee" && (
            <div className="bee-arena" key="bee-active">
              {/* Timer + Progress */}
              <div className="bee-arena-header">
                <div className="bee-timer">{formatTime(beeTimeRemaining)}</div>
                <div className="bee-progress-row">
                  <span className="bee-progress-label">
                    Q{beeCurrentQ + 1} of {DUMMY_QUESTIONS.length}
                  </span>
                  <span className="bee-progress-label">
                    {formatTime(beeTimeRemaining)} remaining
                  </span>
                </div>
                <div className="bee-progress-track">
                  <div
                    className="bee-progress-fill"
                    style={{ width: `${beeProgress}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <QuestionCard
                question={DUMMY_QUESTIONS[beeCurrentQ]}
                showExpandables={false}
              />

              {/* Controls */}
              <div className="bee-controls">
                <button
                  className="btn-primary"
                  type="button"
                  onClick={handleNextBeeQuestion}
                >
                  Next Question →
                </button>
                <button
                  className="btn-ghost"
                  type="button"
                  onClick={handleExitActive}
                >
                  End Bee
                </button>
              </div>
            </div>
          )}

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
            <div className="paper-viewer" key="paper-view">
              <div className="paper-viewer-header">
                <div>
                  <h2 className="paper-viewer-title">
                    {activeMode === "Forge"
                      ? "Forged Paper"
                      : "Generated Questions"}
                  </h2>
                  <p className="paper-viewer-meta">
                    {questionsList.length} {questionsList.length === 1 ? "question" : "questions"} • {subject} • {examBoard} • {selectedDbTopic || "All Topics"}{selectedDbSubtopics.length > 0 ? ` (${selectedDbSubtopics.map(st => st === "" ? "General" : st).join(", ")})` : ""} • {difficulty}
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
                      <QuestionCard question={q} showExpandables={true} />
                    </div>
                  ))
                )}
              </div>
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
                  <div className="setting-group">
                    <span className="setting-label">Subject</span>
                    <PillToggle
                      options={["Physics", "Mathematics", "Further Maths"]}
                      value={subject}
                      onChange={setSubject}
                    />
                  </div>
                </div>

                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Difficulty</span>
                    <PillToggle
                      options={["Standard", "Advanced"]}
                      value={difficulty}
                      onChange={setDifficulty}
                    />
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

            {/* ─── Bee Settings ─── */}
            {activeMode === "Bee" && (
              <>
                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Time Limit (mins)</span>
                    <input
                      className="number-input"
                      type="number"
                      min={1}
                      max={60}
                      value={beeTimeLimit}
                      onChange={(e) =>
                        setBeeTimeLimit(Number(e.target.value) || 1)
                      }
                    />
                  </div>
                </div>

                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Number of Questions</span>
                    <input
                      className="number-input"
                      type="number"
                      min={1}
                      max={100}
                      value={beeQuestionCount}
                      onChange={(e) =>
                        setBeeQuestionCount(Number(e.target.value) || 1)
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {/* ─── Forge Settings ─── */}
            {activeMode === "Forge" && (
              <>
                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Subject</span>
                    <PillToggle
                      options={["Physics", "Mathematics", "Further Maths"]}
                      value={subject}
                      onChange={setSubject}
                    />
                  </div>
                </div>

                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Difficulty</span>
                    <PillToggle
                      options={["Standard", "Advanced"]}
                      value={difficulty}
                      onChange={setDifficulty}
                    />
                  </div>
                </div>

                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Exam Board / Paper Type</span>
                    {metadataLoading ? (
                      <div className="skeleton-list">
                        <div className="skeleton-list-item" />
                        <div className="skeleton-list-item" />
                        <div className="skeleton-list-item" />
                      </div>
                    ) : (
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
                    )}
                  </div>
                </div>

                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Number of Questions</span>
                    <input
                      className="number-input"
                      type="number"
                      min={1}
                      max={50}
                      value={forgeQuestionCount}
                      onChange={(e) =>
                        setForgeQuestionCount(Number(e.target.value) || 1)
                      }
                    />
                  </div>
                </div>

                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">
                      Paper Duration (Hours)
                    </span>
                    <select
                      className="select-input"
                      value={forgeDuration}
                      onChange={(e) => setForgeDuration(e.target.value)}
                    >
                      <option value="1">1 Hour</option>
                      <option value="1.5">1.5 Hours</option>
                      <option value="2">2 Hours</option>
                      <option value="2.5">2.5 Hours</option>
                      <option value="3">3 Hours</option>
                    </select>
                  </div>
                </div>

                <div className="panel-section">
                  <div className="setting-group">
                    <span className="setting-label">Question Styles</span>
                    <MiniToggle
                      label="Include 'Show That' proofs"
                      on={forgeShowThat}
                      onToggle={() => setForgeShowThat((v) => !v)}
                    />
                    <MiniToggle
                      label="Include Multiple Choice"
                      on={forgeMultipleChoice}
                      onToggle={() => setForgeMultipleChoice((v) => !v)}
                    />
                  </div>
                </div>

                <div className="panel-section">
                  <button
                    className="btn-primary panel-btn"
                    type="button"
                    onClick={handleBuildPdf}
                  >
                    <span>📄</span> Build PDF
                  </button>
                </div>
              </>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

export default App;