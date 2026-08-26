import { useState, useEffect, useMemo, useRef } from "react";
import { doc, getDoc, collection, query, where, limit, getDocs } from "firebase/firestore";
import type { QueryConstraint } from "firebase/firestore";
import { db } from "../firebase";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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
  boards: string[];
  years: string[];
  topics: Record<string, string[]>;
  activeFilters?: Record<string, Record<string, string[]>>;
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

type Step = 1 | 2 | 3;
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

const fmt = (t: string) => !t ? "" : t.replace(/\$\$(.*?)\$\$/gs, (_, p) => `\n$$\n${p.trim()}\n$$\n`);

/* ─── Main Page ─────────────────────────────────────────────── */

export default function FluxPage() {
  const [step, setStep] = useState<Step>(1);
  const [tier, setTier] = useState<'standard' | 'advanced' | null>(null);
  const [exam, setExam] = useState<ExamOption>(STANDARD[0]);

  const [metadata, setMetadata] = useState<MetadataIndex | null>(null);
  const [metaLoading, setMetaLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [subtopic, setSubtopic] = useState("");

  const [questions, setQuestions] = useState<QuestionDoc[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [detailTab, setDetailTab] = useState<DetailTab>("mark_scheme");
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
    if (opt.board !== exam.board) { setTopic(""); setSubtopic(""); }
    setExam(opt);
  };

  // Reset on tier change
  const handleTierSelect = (t: 'standard' | 'advanced') => {
    setTier(t);
    setTopic("");
    setSubtopic("");
    setExam(t === 'advanced' ? ADVANCED[0] : STANDARD[0]);
  };

  const examOptions = tier === 'advanced' ? ADVANCED : STANDARD;

  const filteredTopics = useMemo(() => {
    if (!metadata) return {} as Record<string, string[]>;
    let topics = metadata.topics;
    // Always prefer board-specific filters when available
    if (metadata.activeFilters) {
      topics = metadata.activeFilters[exam.board] ?? {};
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

  const CACHE_PREFIX = "flux_qcache";

  const handleFind = async () => {
    if (!topic) return;
    setHintIndex(0);
    setElapsed(0);
    const cacheKey = `${CACHE_PREFIX}_${exam.board}_${exam.subBoard}_${topic}_${subtopic || "all"}`;

    // Check localStorage cache first
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setQuestions(parsed);
          setSidebarOpen(true);
          setDetailId(null);
          setStep(3);
          return;
        }
      } catch { /* corrupt cache, fetch fresh */ }
    }

    setLoadingQuestions(true);
    setQueryError(null);
    try {
      const c: QueryConstraint[] = [
        where("board", "==", exam.board),
        where("subBoard", "==", exam.subBoard),
        where("topic", "==", topic),
      ];
      if (subtopic) c.push(where("subtopic", "==", subtopic));
      const snap = await getDocs(query(collection(db, "flux"), ...c, limit(10)));
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }) as QuestionDoc);
      // Cache the results
      try { localStorage.setItem(cacheKey, JSON.stringify(docs)); } catch { /* storage full */ }
      setQuestions(docs);
      setSidebarOpen(true);
      setDetailId(null);
      setStep(3);
    } catch (err) {
      setQueryError(err instanceof Error ? err.message : "Failed.");
    } finally {
      setLoadingQuestions(false);
    }
  };

  const goBack = () => { setStep(1); setTopic(""); setSubtopic(""); };

  /* ═══════════════════════════════════════════════
     STEP 1 — Exam Picker
     ═══════════════════════════════════════════════ */

  if (step === 1) {
    return (
      <div className="flux">
        <div className="step1">
          <div className="step1-hero">
            <h1 className="step1-title">The question you need is <span className="hl-marker">in here somewhere</span>.</h1>
            <p className="step1-subtitle">
              Search thousands of A-Level past-paper questions by topic and exam board. Every one brings its mark scheme and the examiners' commentary along.
            </p>
            <p className="story-note">psst — the answers come with the official mark schemes.</p>
          </div>

          <div className="step1-choices">
            <div className="tier-row">              <button
                className={`tier-btn ${tier === 'standard' ? 'selected' : ''}`}
                onClick={() => handleTierSelect('standard')}
                type="button">
                <span className="tier-btn-icon" style={{ color: 'var(--accent)' }}><IconBook size={24} /></span>
                <span className="tier-btn-label">Standard</span>
                <span className="tier-btn-desc">The trusty A-Level syllabus — Edexcel, OCR, MEI</span>
              </button>              <button
                className={`tier-btn ${tier === 'advanced' ? 'selected' : ''}`}
                onClick={() => handleTierSelect('advanced')}
                type="button">
                <span className="tier-btn-icon" style={{ color: 'var(--accent)' }}><IconTrophy size={24} /></span>
                <span className="tier-btn-label">Advanced</span>
                <span className="tier-btn-desc">AEA, MAT, MadAsMaths — for the brave</span>
              </button>
            </div>

            {tier && (
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
            )}
          </div>

          <button className="cta-btn" onClick={() => setStep(2)} disabled={!tier} type="button">
            Continue <span className="cta-btn-arrow"><IconArrowRight size={16} /></span>
          </button>
        </div>
      </div>
    );
  }

  /* ═══════════════════════════════════════════════
     STEP 2 — Topic Browser
     ═══════════════════════════════════════════════ */

  if (step === 2) {
    const topicKeys = Object.keys(filteredTopics).sort();

    return (
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
                        onClick={() => { setTopic(topic === t ? "" : t); setSubtopic(""); }}
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
                              onClick={() => setSubtopic(subtopic === st ? "" : st)}
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
                  : `Choose a topic from the sidebar and we'll hunt down the matching questions from ${exam.label} papers.`}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--sp-3)' }}>
                <button className="back-link" onClick={goBack} type="button">
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
  }

  /* ═══════════════════════════════════════════════
     STEP 3 — Results
     Sidebar slides out. Detail pane slides in from right.
     ═══════════════════════════════════════════════ */

  const handleOpenDetail = (qId: string, tab: DetailTab) => {
    setDetailId(qId);
    setDetailTab(tab);
    setSidebarOpen(false);
  };

  const handleCloseDetail = () => {
    setDetailId(null);
    setSidebarOpen(true);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(o => !o);
    setDetailId(null); // Closing sidebar auto-closes detail
  };

  const handleDetailTabChange = (tab: DetailTab) => {
    if (detailTab !== tab) setDetailTab(tab);
  };

  const detailQuestion = detailId ? questions.find(q => q.id === detailId) : null;
  const detailContent = detailQuestion
    ? (detailTab === "mark_scheme"
      ? (detailQuestion.mark_scheme_markdown ?? detailQuestion.markScheme ?? "")
      : (detailQuestion.examiner_report_markdown ?? detailQuestion.examinerNotes ?? ""))
    : "";

  return (
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
                {questions.map(q => {
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
                    <div key={q.id} className="qcard">
                      <div className="qcard-head">
                        <span className="qcard-topic">
                          {q.topic}{q.subtopic ? ` · ${q.subtopic || 'General'}` : ''}
                        </span>
                        <span className="qcard-meta">{meta}</span>
                      </div>
                      <div className="qcard-body">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {fmt(problem)}
                        </ReactMarkdown>
                      </div>

                      {(ms || er) && (
                        <div className="qcard-actions">
                          {ms && (
                            <button
                              className={`qcard-action ${isDetailActive && detailTab === "mark_scheme" ? "active" : ""}`}
                              onClick={() => isDetailActive && detailTab === "mark_scheme"
                                ? handleCloseDetail()
                                : handleOpenDetail(q.id, "mark_scheme")}
                              type="button"
                            >
                              <IconClipboard size={14} /> Mark Scheme
                            </button>
                          )}
                          {er && (
                            <button
                              className={`qcard-action ${isDetailActive && detailTab === "examiner_report" ? "active" : ""}`}
                              onClick={() => isDetailActive && detailTab === "examiner_report"
                                ? handleCloseDetail()
                                : handleOpenDetail(q.id, "examiner_report")}
                              type="button"
                            >
                              <IconFileText size={14} /> Examiner Report
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
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
                  {detailContent ? (
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {fmt(detailContent)}
                    </ReactMarkdown>
                  ) : (
                    <div style={{ opacity: 0.5 }}>Not available for this question.</div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
