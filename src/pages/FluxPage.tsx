import { useState, useEffect, useMemo, useRef } from "react";
import { doc, getDoc, collection, query, where, limit, getDocs } from "firebase/firestore";
import type { QueryConstraint } from "firebase/firestore";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { db } from "../firebase";
import { splitMarkSchemeSteps, stepNumber } from "../lib/msSteps";
import { FluxMarkdown, FigureAwareMarkdown } from "../components/FluxMarkdown";
import { QuestionParts } from "../components/QuestionParts";
import { useBriefcase } from "../briefcase-context";
import { BriefcaseIcon } from "../briefcase";

/* ─── Simple inline SVG icons (no emoji) ──────────────────── */

function IconBook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v14H4z" />
      <path d="M8 6V4h8v2" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="13" y2="14" />
    </svg>
  );
}

function IconTrophy({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5A2.5 2.5 0 0 1 2 6.5C2 5.12 3.12 4 4.5 4H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 19.5 4H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C6.88 19.24 6 20.04 6 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C18.12 19.24 19 20.04 19 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconArrowLeft({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function IconClipboard({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function IconFileText({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

const FIND_HINTS = [
  "Summoning your questions…",
  "Consulting the ancient mark schemes…",
  "Chasing the examiners' notes…",
  "Polishing the answers…",
];

function TopProgress({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="top-progress" aria-hidden="true">
      <div className="top-progress-inner" />
    </div>
  );
}

/* ─── Types ──────────────────────────────────────────────────── */

interface MetadataIndex {
  boards?: string[] | Record<string, string[]>;
  years?: string[];
  topics?: Record<string, string[]>;
  activeFilters?: Record<string, Record<string, string[]> | Record<string, Record<string, string[]>>>;
}

interface ExamOption { label: string; board: string; subBoard: string; }

interface QuestionDoc {
  id: string;
  board?: string;
  subBoard?: string;
  year?: string;
  paper?: string;
  question?: string;
  question_number?: string;
  topic?: string;
  subtopic?: string;
  problem_markdown?: string;
  mark_scheme_markdown?: string;
  examiner_report_markdown?: string;
  markScheme?: string;
  examinerNotes?: string;
  [key: string]: unknown;
}

type DetailTab = "mark_scheme" | "examiner_report" | null;

const STANDARD: ExamOption[] = [
  { label: 'Edexcel', board: 'Edexcel', subBoard: 'A-Level' },
  { label: 'Edexcel IAL', board: 'Edexcel', subBoard: 'IAL' },
  { label: 'OCR', board: 'OCR', subBoard: 'A-Level' },
  { label: 'OCR MEI', board: 'OCR', subBoard: 'MEI' },
];

const ADVANCED: ExamOption[] = [
  { label: 'AEA', board: 'Edexcel', subBoard: 'AEA' },
  { label: 'MAT', board: 'Oxford', subBoard: 'MAT' },
  { label: 'MadAsMaths SP', board: 'MadAsMaths', subBoard: 'SP' },
  { label: 'MadAsMaths SPX', board: 'MadAsMaths', subBoard: 'SPX' },
];

function findExam(board: string, subBoard: string): ExamOption {
  return [...ADVANCED, ...STANDARD].find(o => o.board === board && o.subBoard === subBoard) ?? STANDARD[0];
}

function normalizeSearchToken(token: string): string {
  return token.toLowerCase().replace(/[_-]/g, " ").trim();
}

function parseSearchQuery(input: string) {
  const tokens = input.trim().split(/\s+/).filter(Boolean).map(normalizeSearchToken);
  const first = tokens[0] ?? "";
  const subBoard = [...STANDARD, ...ADVANCED].find(option => option.label.toLowerCase() === first) ?? null;
  return { tokens, subBoard, topicQuery: tokens.slice(1).join(" ") };
}


/* ─── Main Page ─────────────────────────────────────────────── */

export default function FluxPage() {
  const { toggle, isSelected } = useBriefcase();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL is the source of truth: /home → picker, /topics → browser, /results → results.
  const path = location.pathname;
  const step: 1 | 2 | 3 = path === "/home" ? 1 : path === "/topics" ? 2 : 3;

  const topic = searchParams.get("topic") ?? "";
  const subtopic = searchParams.get("subtopic") ?? "";

  // The exam selection is local state while picking on /home — the URL only
  // learns about it once the user clicks Continue (so selecting boards doesn't
  // rewrite the address bar). If the URL already carries an exam (e.g. coming
  // back from /topics), we restore it.
  const [exam, setExam] = useState<ExamOption>(() =>
    findExam(searchParams.get("board") ?? "", searchParams.get("subBoard") ?? "")
  );
  // Advanced tier includes AEA, whose board is "Edexcel" — so classify by the
  // exam option itself, not by the board string.
  const tier: 'standard' | 'advanced' = ADVANCED.some(o => o.label === exam.label) ? 'advanced' : 'standard';
  const examOptions = tier === 'advanced' ? ADVANCED : STANDARD;

  const [metadata, setMetadata] = useState<MetadataIndex | null>(null);
  const [metaLoading, setMetaLoading] = useState(true);
  const [globalQuery, setGlobalQuery] = useState(() => searchParams.get("search") ?? "");
  const [searchError, setSearchError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [questions, setQuestions] = useState<QuestionDoc[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [detailTab, setDetailTab] = useState<DetailTab>("mark_scheme");
  const [revealedSteps, setRevealedSteps] = useState<Record<string, number>>({});
  const [hintIndex, setHintIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, "sys_config", "metadata_index"));
        if (!cancelled) setMetadata(snap.exists() ? snap.data() as MetadataIndex : null);
      } catch { /* */ }
      finally { if (!cancelled) setMetaLoading(false); }
    })();
    return () => { cancelled = true; };
  }, []);

  // Rotating hints + elapsed timer while searching
  useEffect(() => {
    if (!loadingQuestions) return;
    const h = window.setInterval(() => setHintIndex(i => (i + 1) % FIND_HINTS.length), 2200);
    const s = window.setInterval(() => setElapsed(e => e + 1), 1000);
    return () => { window.clearInterval(h); window.clearInterval(s); };
  }, [loadingQuestions]);

  // Reset selected topic when exam board changes
  const handleExamChange = (opt: ExamOption) => {
    setExam(opt);
  };

  // Reset on tier change
  const handleTierSelect = (t: 'standard' | 'advanced') => {
    setExam(t === 'advanced' ? ADVANCED[0] : STANDARD[0]);
  };

  // Commit the exam choice to the URL and move to the topic browser.
  const continueToTopics = () => {
    const next = new URLSearchParams(searchParams);
    next.set("board", exam.board);
    next.set("subBoard", exam.subBoard);
    navigate(`/topics?${next.toString()}`);
  };

  const filteredTopics = useMemo(() => {
    if (!metadata) return {} as Record<string, string[]>;
    let topics = metadata.topics ?? {};
    // Prefer board + sub-board filters when generated metadata is available.
    const boardFilters = metadata.activeFilters?.[exam.board];
    if (boardFilters) {
      const candidate = boardFilters as Record<string, unknown>;
      const scoped = candidate[exam.subBoard];
      const rawTopics = scoped && typeof scoped === "object" && !Array.isArray(scoped) ? scoped : candidate;
      topics = Object.fromEntries(
        Object.entries(rawTopics).filter(([, subs]) => Array.isArray(subs))
      ) as Record<string, string[]>;
    }
    const q = search.trim().toLowerCase();
    if (!q) return topics;
    const result: Record<string, string[]> = {};
    for (const [t, subs] of Object.entries(topics)) {
      if (t.toLowerCase().includes(q)) { result[t] = subs; continue; }
      const ms = subs.filter(s => (s || "general").toLowerCase().includes(q));
      if (ms.length) result[t] = ms;
    }
    return result;
  }, [metadata, search, exam]);

  // Cache key for whatever search the URL describes.
  const searchKey = () => `flux_qcache_${searchParams.toString()}`;

  // Track the most recent search so a direct load of /results re-runs it.
  const searchedKeyRef = useRef<string | null>(null);

  // Fetch questions for the current URL params (no navigation — caller navigates).
  const fetchQuestions = async () => {
    const urlBoard = searchParams.get("board");
    const urlSubBoard = searchParams.get("subBoard");
    const urlTopic = searchParams.get("topic");
    const urlSubtopic = searchParams.get("subtopic");
    const urlSearch = searchParams.get("search")?.trim() ?? "";
    const key = searchKey();
    setHintIndex(0);
    setElapsed(0);

    // Check localStorage cache first
    const cached = localStorage.getItem(key);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setQuestions(parsed);
          setSidebarOpen(true);
          setDetailId(null);
          return;
        }
      } catch { /* corrupt cache, fetch fresh */ }
    }

    setLoadingQuestions(true);
    setQueryError(null);
    try {
      const constraints: QueryConstraint[] = [];
      if (urlBoard) constraints.push(where("board", "==", urlBoard));
      if (urlSubBoard) constraints.push(where("subBoard", "==", urlSubBoard));
      if (urlTopic) constraints.push(where("topic", "==", urlTopic));
      if (urlSubtopic) constraints.push(where("subtopic", "==", urlSubtopic));
      if (searchParams.get("year")) constraints.push(where("year", "==", searchParams.get("year")));
      if (searchParams.get("question")) constraints.push(where("question_number", "==", searchParams.get("question")));
      const snap = await getDocs(query(collection(db, "flux"), ...constraints, limit(100)));
      const docs = snap.docs
        .map(d => ({ id: d.id, ...d.data() }) as QuestionDoc)
        .filter(q => !urlSearch || [q.board, q.subBoard, q.topic, q.subtopic, q.year, q.paper, q.question_number, q.question]
          .map(value => String(value ?? "").toLowerCase())
          .join(" ")
          .includes(urlSearch.toLowerCase()));
      // Cache the results
      try { localStorage.setItem(key, JSON.stringify(docs)); } catch { /* storage full */ }
      setQuestions(docs);
      setSidebarOpen(true);
      setDetailId(null);
    } catch (err) {
      setQueryError(err instanceof Error ? err.message : "Failed.");
    } finally {
      setLoadingQuestions(false);
    }
  };

  const handleFind = () => {
    if (!topic) return;
    const next = new URLSearchParams(searchParams);
    next.set("board", exam.board);
    next.set("subBoard", exam.subBoard);
    next.set("topic", topic);
    if (subtopic) next.set("subtopic", subtopic); else next.delete("subtopic");
    navigate(`/results?${next.toString()}`);
  };

  // Re-run the search when the page is loaded directly on /results (e.g. after
  // a refresh or when sharing a results link) — component state doesn't survive
  // a page load, so the query needs re-fetching.
  useEffect(() => {
    if (path !== "/results") return;
    if (!searchParams.get("topic") && !searchParams.get("search")) return;
    if (searchedKeyRef.current === searchKey()) return;
    searchedKeyRef.current = searchKey();
    void fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, location.search]);

  const goBack = () => {
    setDetailId(null);
    navigate("/topics" + location.search);
  };

  /* ═══════════════════════════════════════════════
     STEP 1 — Exam Picker (/home)
     ═══════════════════════════════════════════════ */

  /*
    <div className="flux">
      <div className="step1">
        <div className="step1-hero">
          <h1 className="step1-title">The only perfect exam board filter <span className="hl-marker">in existence</span>.</h1>
          <p className="step1-subtitle">
            Quite literally THE tool for any maths student or teacher during the exam season. Curated by students, for students.
          </p>
          <p className="story-note">psst — i know where you live so if you're mean I'll find you :p...</p>
        </div>

        <div className="step1-choices">
          <div className="tier-row">              <button
            className={`tier-btn ${tier === 'standard' ? 'selected' : ''}`}
            onClick={() => handleTierSelect('standard')}
            type="button">
            <span className="tier-btn-icon" style={{ color: 'var(--accent)' }}><IconBook size={24} /></span>
            <span className="tier-btn-label">Standard</span>
            <span className="tier-btn-desc">The expected A-Level syllabus — Edexcel, OCR, MEI, etc</span>
          </button>              <button
            className={`tier-btn ${tier === 'advanced' ? 'selected' : ''}`}
            onClick={() => handleTierSelect('advanced')}
            type="button">
            <span className="tier-btn-icon" style={{ color: 'var(--accent)' }}><IconTrophy size={24} /></span>
            <span className="tier-btn-label">Advanced</span>
            <span className="tier-btn-desc">More niche or advanced question sets</span>
          </button>
          </div>

          <div className="board-row" key={tier}>
            {examOptions.map(opt => (
              <button
                key={opt.label}
                className={`board-chip ${exam.label === opt.label ? 'selected' : ''}`}
                onClick={() => handleExamChange(opt)}
                type="button"
              >
                <span className="board-chip-radio">
                  <span className="board-chip-radio-dot" />
                </span>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <button className="cta-btn" onClick={continueToTopics} type="button">
          Continue <span className="cta-btn-arrow"><IconArrowRight size={16} /></span>
        </button>
      </div>
    </div>
  );
  */

  /* ═══════════════════════════════════════════════
     STEP 2 — Topic Browser (/topics)
     ═══════════════════════════════════════════════ */

  const topicKeys = Object.keys(filteredTopics).sort();
  const filteredTopicsForExam = (selectedExam: ExamOption) => {
    if (!metadata) return {} as Record<string, string[]>;
    const boardFilters = metadata.activeFilters?.[selectedExam.board];
    if (!boardFilters) return metadata.topics ?? {};
    const candidate = boardFilters as Record<string, unknown>;
    const scoped = candidate[selectedExam.subBoard];
    const rawTopics = scoped && typeof scoped === "object" && !Array.isArray(scoped) ? scoped : candidate;
    return Object.fromEntries(Object.entries(rawTopics).filter(([, subs]) => Array.isArray(subs))) as Record<string, string[]>;
  };

  const searchSuggestions = useMemo(() => {
    const parsed = parseSearchQuery(globalQuery);
    const raw = globalQuery.trim();
    if (!raw) return [...STANDARD, ...ADVANCED].map(option => ({ kind: "subBoard" as const, option, label: option.label }));
    if (!parsed.subBoard) {
      return [...STANDARD, ...ADVANCED]
        .filter(option => option.label.toLowerCase().startsWith(parsed.tokens[0] ?? ""))
        .map(option => ({ kind: "subBoard" as const, option, label: option.label }));
    }
    const topicQuery = parsed.topicQuery.toLowerCase();
    const availableTopics = filteredTopicsForExam(parsed.subBoard);
    return Object.entries(availableTopics).flatMap(([topic, subtopics]) => [
      { kind: "topic" as const, label: topic, topic, subtopic: undefined, option: parsed.subBoard },
      ...subtopics.map(subtopic => ({ kind: "subtopic" as const, label: `${topic} · ${subtopic || "General"}`, topic, subtopic, option: parsed.subBoard })),
    ]).filter(entry => !topicQuery || `${entry.topic} ${entry.subtopic ?? ""}`.toLowerCase().includes(topicQuery)).slice(0, 8);
  }, [globalQuery, metadata]);

  const runGlobalSearch = (value = globalQuery) => {
    const parsed = parseSearchQuery(value);
    if (!parsed.subBoard) {
      setSearchError("Choose a sub-board first, such as AEA, Edexcel, or OCR.");
      return;
    }
    if (!parsed.topicQuery) {
      setSearchError("Add a topic or subtopic after the sub-board.");
      return;
    }
    const next = new URLSearchParams();
    next.set("board", parsed.subBoard.board);
    next.set("subBoard", parsed.subBoard.subBoard);
    next.set("search", parsed.topicQuery);
    setExam(parsed.subBoard);
    setQueryError(null);
    setSearchError(null);
    navigate(`/results?${next.toString()}`);
  };

  const selectSearchSuggestion = (suggestion: (typeof searchSuggestions)[number]) => {
    if (!suggestion.option) return;
    const nextValue = suggestion.kind === "subBoard"
      ? suggestion.option.label + " "
      : `${suggestion.option.label} ${suggestion.topic}${suggestion.subtopic ? ` ${suggestion.subtopic}` : ""}`;
    setGlobalQuery(nextValue);
    setSearchError(null);
    if (suggestion.kind !== "subBoard" && window.matchMedia("(max-width: 768px)").matches) runGlobalSearch(nextValue);
  };

  const globalSearch = (
    <form className="global-search" onSubmit={e => { e.preventDefault(); runGlobalSearch(); }}>
      <span className="global-search-icon" aria-hidden="true">⌕</span>
      <input value={globalQuery} onChange={e => { setGlobalQuery(e.target.value); setSearchError(null); }} placeholder="Sub-board, then topic…" aria-label="Search questions" />
      {globalQuery && <button type="button" className="global-search-clear" onClick={() => { setGlobalQuery(""); setSearchError(null); }} aria-label="Clear search">×</button>}
      {searchSuggestions.length > 0 && <div className="global-search-suggestions">{searchSuggestions.map((suggestion, i) => <button key={`${suggestion.kind}-${i}`} type="button" onClick={() => selectSearchSuggestion(suggestion)}><strong>{suggestion.label}</strong><span>{suggestion.kind === "subBoard" ? "Sub-board" : suggestion.subtopic ? "Subtopic" : "Topic"}</span></button>)}</div>}
      {searchError && <span className="global-search-error" role="alert">{searchError}</span>}
    </form>
  );

  const step1WithSearch = (
    <div className="flux">
      {globalSearch}
      <div className="step1">
        <div className="step1-hero">
          <h1 className="step1-title">The only perfect exam board filter <span className="hl-marker">in existence</span>.</h1>
          <p className="step1-subtitle">
            Quite literally THE tool for any maths student or teacher during the exam season. Curated by students, for students.
          </p>
          <p className="story-note">psst — i know where you live so if you're mean I'll find you :p...</p>
        </div>
        <div className="step1-choices">
          <div className="tier-row">              <button className={`tier-btn ${tier === 'standard' ? 'selected' : ''}`} onClick={() => handleTierSelect('standard')} type="button"><span className="tier-btn-icon" style={{ color: 'var(--accent)' }}><IconBook size={24} /></span><span className="tier-btn-label">Standard</span><span className="tier-btn-desc">The expected A-Level syllabus — Edexcel, OCR, MEI, etc</span></button>
            <button className={`tier-btn ${tier === 'advanced' ? 'selected' : ''}`} onClick={() => handleTierSelect('advanced')} type="button"><span className="tier-btn-icon" style={{ color: 'var(--accent)' }}><IconTrophy size={24} /></span><span className="tier-btn-label">Advanced</span><span className="tier-btn-desc">More niche or advanced question sets</span></button>
          </div>
          <div className="board-row" key={tier}>{examOptions.map(opt => <button key={opt.label} className={`board-chip ${exam.label === opt.label ? 'selected' : ''}`} onClick={() => handleExamChange(opt)} type="button"><span className="board-chip-radio"><span className="board-chip-radio-dot" /></span>{opt.label}</button>)}</div>
        </div>
        <button className="cta-btn" onClick={continueToTopics} type="button">Continue <span className="cta-btn-arrow"><IconArrowRight size={16} /></span></button>
      </div>
    </div>
  );

  const step2 = (
    <div className="flux">
      <TopProgress visible={loadingQuestions} />
      <div className="step2">
        <div className="step2-sidebar" key="s2sidebar">
          <div className="sidebar-top">
            <span className="sidebar-label">Topics</span>
            <span className="pill">{exam.label}</span>
          </div>
          <div className="search-box">
            <input
              className="search-input"
              placeholder="Filter topics…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="sidebar-tree">
            {metaLoading ? (
              <div style={{ padding: 'var(--sp-4)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                <div className="skel" style={{ height: 28 }} />
                <div className="skel" style={{ height: 28, width: '70%' }} />
                <div className="skel" style={{ height: 28, width: '50%' }} />
              </div>
            ) : topicKeys.length === 0 ? (
              <p style={{ padding: 'var(--sp-4)', fontSize: '0.83rem', color: 'var(--text-subtle)', textAlign: 'center' }}>
                {search ? 'Nothing matches — try another word.' : 'No questions for this board yet. The archive is still being written…'}
              </p>
            ) : (
              topicKeys.map(t => {
                const subs = filteredTopics[t];
                const isActive = topic === t;
                return (
                  <div key={t}>
                    <div
                      className={`tree-item ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        const next = new URLSearchParams(searchParams);
                        if (topic === t) next.delete("topic"); else next.set("topic", t);
                        next.delete("subtopic");
                        setSearchParams(next);
                      }}
                    >
                      <span>{t}</span>
                      <span className="tree-badge">{subs.length}</span>
                    </div>
                    {isActive && subs.length > 0 && (
                      <div className="tree-sub">
                        {subs.map(st => (
                          <div
                            key={st}
                            className={`tree-sub-item ${subtopic === st ? 'selected' : ''}`}
                            onClick={() => {
                              const next = new URLSearchParams(searchParams);
                              if (subtopic === st) next.delete("subtopic"); else next.set("subtopic", st);
                              setSearchParams(next);
                            }}
                          >
                            <span className="tree-sub-dot" />
                            {st || "General"}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="step2-main" key="s2main">
          <div style={{ textAlign: 'center', maxWidth: 360 }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 'var(--sp-3)', color: 'var(--text)' }}>
              {topic ? (subtopic ? 'Ready to search' : `Browse ${topic}`) : 'Pick a topic from the shelf'}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 'var(--sp-5)' }}>
              {topic
                ? subtopic
                  ? `${topic} · ${subtopic || 'General'} from ${exam.label}`
                  : `Pick a subtopic inside ${topic}, or search the whole topic.`
                : `Only topics found in ${exam.label} papers will be shown.`}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--sp-3)' }}>
              <button className="back-link" onClick={() => navigate("/home")} type="button">
                <IconArrowLeft size={14} /> Back
              </button>
              <button className="find-btn" onClick={handleFind} disabled={!topic || loadingQuestions} type="button">
                {loadingQuestions ? <><span className="spinner" /> Searching</> : 'Find Questions'}
              </button>
            </div>
            {queryError && (
              <p style={{ marginTop: 'var(--sp-3)', fontSize: '0.83rem', color: 'var(--danger)' }}>{queryError}</p>
            )}
            {loadingQuestions && (
              <div className="finding-state" style={{ marginTop: 'var(--sp-6)' }}>
                <div className="finding-orb" />
                <p className="finding-hint">{FIND_HINTS[hintIndex]}</p>
                {elapsed >= 5 && (
                  <p className="finding-note">Still looking after {elapsed}s — probably the internet's fault, not yours.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  /* ═══════════════════════════════════════════════
     STEP 3 — Results (/results)
     Sidebar slides out. Detail pane slides in from right.
     ═══════════════════════════════════════════════ */

  const handleOpenDetail = (qId: string, tab: DetailTab) => {
    setDetailId(qId);
    setDetailTab(tab);
    setSidebarOpen(false);
    if (tab === "mark_scheme") {
      setRevealedSteps(prev => ({ ...prev, [qId]: prev[qId] ?? 1 }));
    }
  };

  const handleCloseDetail = () => {
    // Closing the detail pane always starts this question's reveal journey over.
    if (detailId) setRevealedSteps(prev => ({ ...prev, [detailId]: 1 }));
    setDetailId(null);
    setSidebarOpen(true);
  };

  const handleToggleSidebar = () => {
    if (detailId) setRevealedSteps(prev => ({ ...prev, [detailId]: 1 }));
    setSidebarOpen(o => !o);
    setDetailId(null); // Closing sidebar auto-closes detail
  };

  const handleDetailTabChange = (tab: DetailTab) => {
    if (detailTab !== tab) {
      setDetailTab(tab);
      if (tab === "mark_scheme" && detailId) {
        setRevealedSteps(prev => ({ ...prev, [detailId]: prev[detailId] ?? 1 }));
      }
    }
  };

  const detailQuestion = detailId ? questions.find(q => q.id === detailId) : null;
  const detailContent = detailQuestion
    ? (detailTab === "mark_scheme"
      ? (detailQuestion.mark_scheme_markdown ?? detailQuestion.markScheme ?? "")
      : (detailQuestion.examiner_report_markdown ?? detailQuestion.examinerNotes ?? ""))
    : "";

  const msSteps = detailQuestion
    ? splitMarkSchemeSteps(detailQuestion.mark_scheme_markdown ?? detailQuestion.markScheme)
    : ([] as string[]);

  const revealed = detailId && msSteps.length > 1 ? Math.min(revealedSteps[detailId] ?? 1, msSteps.length) : 0;
  const allRevealed = revealed > 0 && revealed >= msSteps.length;
  const nextStepNum = !allRevealed && revealed > 0 ? stepNumber(msSteps[revealed] ?? "") : null;

  const step3 = (
    <div className="flux">
      <div className="step3" key="step3">
        {/* Sidebar */}
        <div className={`step3-sidebar ${!sidebarOpen ? 'collapsed' : ''}`} ref={sidebarRef}>
          <div className="sticky-section">
            <button className="back-link" onClick={goBack} type="button">
              <IconArrowLeft size={14} /> Change topic
            </button>
          </div>
          <div style={{ marginTop: 'var(--sp-2)' }}>
            <span className="pill">{exam.label}</span>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{topic}</p>
            {subtopic && <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: 2 }}>{subtopic || 'General'}</p>}
          </div>
          <div className="sidebar-count">
            <span className="sidebar-count-num">{questions.length}</span>
            <span className="sidebar-count-label">{questions.length === 1 ? 'question found' : 'questions found'}</span>
          </div>
        </div>

        {/* Sidebar toggle dot */}
        {!sidebarOpen && (
          <button className="sidebar-toggle" onClick={handleToggleSidebar} type="button" title="Open sidebar">
            ▸
          </button>
        )}

        {/* Main */}
        <div className="step3-main">
          <div className="results-scroll" ref={mainScrollRef}>
            {questions.length === 0 ? (
              <div className="empty-state">
                <span className="empty-state-symbol">[  ]</span>
                <h3 className="empty-state-title">No questions in this corner of the archive</h3>
                <p className="empty-state-text">Wander to another topic or exam board — they're hiding somewhere.</p>
                <p className="story-note">the questions are shy, but they exist.</p>
              </div>
            ) : (
              <div className="results-list">
                {questions.map(q => (
                  <QuestionCard
                    key={q.id}
                    q={q}
                    detailId={detailId}
                    detailTab={detailTab}
                    isSelected={isSelected(q.id)}
                    onToggle={() => toggle(q)}
                    onOpenDetail={handleOpenDetail}
                    onCloseDetail={handleCloseDetail}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detail pane — slides in from right */}
        <div className={`step3-detail ${detailId ? 'open' : ''}`}>
          {detailId && detailQuestion && (
            <>
              <div className="detail-tabs">
                <button
                  className={`detail-tab ${detailTab === "mark_scheme" ? "active" : ""}`}
                  onClick={() => handleDetailTabChange("mark_scheme")}
                  type="button"
                >
                  Mark Scheme
                </button>
                {detailQuestion.examiner_report_markdown || detailQuestion.examinerNotes ? (
                  <button
                    className={`detail-tab ${detailTab === "examiner_report" ? "active" : ""}`}
                    onClick={() => handleDetailTabChange("examiner_report")}
                    type="button"
                  >
                    Examiner Report
                  </button>
                ) : null}
                <button className="detail-close" onClick={handleCloseDetail} type="button" title="Close">
                  ✕
                </button>
              </div>
              <div className="detail-content">
                <div key={`${detailId}-${detailTab}`} className="detail-fade-in">
                  {detailTab === "mark_scheme" ? (
                    detailContent ? (
                      msSteps.length <= 1 ? (
                        <FigureAwareMarkdown>{detailContent}</FigureAwareMarkdown>
                      ) : (
                        <div className="ms-reveal">
                          {msSteps.slice(0, revealed).map((step, i) => (
                            <div
                              key={i}
                              className="ms-step ms-step-reveal"
                              style={{ "--ms-delay": `${Math.min(i, 7) * 55}ms` } as React.CSSProperties}
                            >
                              <FigureAwareMarkdown>{step}</FigureAwareMarkdown>
                            </div>
                          ))}
                          <div className="ms-reveal-actions">
                            {allRevealed ? (
                              <span className="ms-reveal-done">✓ All steps revealed</span>
                            ) : (
                              <button
                                className="ms-reveal-btn"
                                onClick={() => setRevealedSteps(prev => ({ ...prev, [detailId!]: revealed + 1 }))}
                                type="button"
                              >
                                {nextStepNum ? `Reveal Step ${nextStepNum}` : "Reveal next step"}
                              </button>
                            )}
                            {!allRevealed && (
                              <button
                                className="ms-reveal-all"
                                onClick={() => setRevealedSteps(prev => ({ ...prev, [detailId!]: msSteps.length }))}
                                type="button"
                              >
                                Reveal all
                              </button>
                            )}
                          </div>
                        </div>
                      )
                    ) : (
                      <div style={{ opacity: 0.5 }}>Not available for this question.</div>
                    )
                  ) : (
                    detailContent ? (
                      <FluxMarkdown>{detailContent}</FluxMarkdown>
                    ) : (
                      <div style={{ opacity: 0.5 }}>Not available for this question.</div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return step === 1 ? step1WithSearch : step === 2 ? step2 : step3;
}

/* ─── Question card (results list) ──────────────────────────── */

interface QuestionCardProps {
  q: QuestionDoc;
  detailId: string | null;
  detailTab: DetailTab;
  isSelected: boolean;
  onToggle: () => void;
  onOpenDetail: (qId: string, tab: DetailTab) => void;
  onCloseDetail: () => void;
}

function QuestionCard({ q, detailId, detailTab, isSelected, onToggle, onOpenDetail, onCloseDetail }: QuestionCardProps) {
  const board = String(q.board || '').trim();
  const yr = String(q.year || '').trim();
  const paper = String(q.paper || '').trim();
  const qn = String(q.question_number || q.question || '').trim();
  const meta = [board, yr, paper, qn ? `Q${qn}` : ''].filter(Boolean).join(' ');
  const problem = q.problem_markdown ?? q.question ?? "";
  const ms = q.mark_scheme_markdown ?? q.markScheme ?? "";
  const er = q.examiner_report_markdown ?? q.examinerNotes ?? "";
  const isDetailActive = detailId === q.id;

  return (
    <div className="qcard">
      <div className="qcard-head">
        <span className="qcard-topic">
          {q.topic}{q.subtopic ? ` · ${q.subtopic || 'General'}` : ''}
        </span>
        <div className="qcard-head-right">
          <span className="qcard-meta">{meta}</span>
          <button
            className={`briefcase-add ${isSelected ? "selected" : ""}`}
            onClick={onToggle}
            aria-pressed={isSelected}
            title={isSelected ? "Remove from briefcase" : "Add to briefcase"}
            type="button"
          >
            <BriefcaseIcon size={15} />
          </button>
        </div>
      </div>
      <div className="qcard-body">
        <QuestionParts md={problem} />
      </div>

      {(ms || er) && (
        <div className="qcard-actions">
          {ms && (
            <button
              className={`qcard-action ${isDetailActive && detailTab === "mark_scheme" ? "active" : ""}`}
              onClick={() => isDetailActive && detailTab === "mark_scheme"
                ? onCloseDetail()
                : onOpenDetail(q.id, "mark_scheme")}
              type="button"
            >
              <IconClipboard size={14} /> Mark Scheme
            </button>
          )}
          {er && (
            <button
              className={`qcard-action ${isDetailActive && detailTab === "examiner_report" ? "active" : ""}`}
              onClick={() => isDetailActive && detailTab === "examiner_report"
                ? onCloseDetail()
                : onOpenDetail(q.id, "examiner_report")}
              type="button"
            >
              <IconFileText size={14} /> Examiner Report
            </button>
          )}
        </div>
      )}
    </div>
  );
}
