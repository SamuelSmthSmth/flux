import { useState, useEffect, useCallback } from "react";

interface Commit { sha: string; commit: { message: string; author: { date: string } }; }
interface FallbackEntry { message: string; date: string; }

const GITHUB_USER = "SamuelSmthSmth";
const GITHUB_REPO = "flux";

const FALLBACK: FallbackEntry[] = [
  { message: "Flux Beta — Edexcel & AEA past-papers integrated.", date: new Date().toISOString() },
  { message: "Topic browser rebuilt with full taxonomy search.", date: new Date().toISOString() },
  { message: "Mark schemes & examiner reports now inline per question.", date: new Date().toISOString() },
];

const STEPS = [
  { num: "1", title: "Search for topics", desc: "Filter through a range of exam boards and select topics that each exam board provides." },
  { num: "2", title: "Browse the library", desc: "Save questions for later, or self study with the official mark schemes and examiner reports." },
  { num: "3", title: "Test yourself", desc: "Customise and compile worksheets and realistic practice papers for the exam season." },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function truncate(msg: string, max = 66) {
  const f = msg.split("\n")[0];
  return f.length > max ? f.slice(0, max) + "…" : f;
}

export default function WelcomeModal() {
  const [visible, setVisible] = useState(() => !localStorage.getItem("flux_welcomed"));
  const [closing, setClosing] = useState(false);
  const [changelog, setChangelog] = useState<FallbackEntry[]>([]);
  const [clLoading, setClLoading] = useState(true);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setVisible(false);
      setClosing(false);
      localStorage.setItem("flux_welcomed", "true");
    }, 250);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits?per_page=5`, {
          headers: { Accept: "application/vnd.github+json" }
        });
        if (!res.ok) throw new Error("fail");
        const data: Commit[] = await res.json();
        if (!cancelled) setChangelog(data.slice(0, 3).map(c => ({ message: c.commit.message, date: c.commit.author.date })));
      } catch { if (!cancelled) setChangelog(FALLBACK); }
      finally { if (!cancelled) setClLoading(false); }
    })();
    return () => { cancelled = true; };
  }, [visible]);

  if (!visible) {
    return (
      <button type="button" aria-label="How Flux works" className="welcome-help-btn" onClick={() => setVisible(true)}>
        ?
      </button>
    );
  }

  return (
    <div
      className="welcome-backdrop"
      style={{ opacity: closing ? 0 : 1, transition: 'opacity 0.25s' }}
      onClick={close}
      aria-modal="true"
      role="dialog"
      aria-label="Welcome to Flux"
    >
      <div
        className="welcome-container"
        style={closing ? { opacity: 0, transform: 'translateY(16px)', transition: 'all 0.25s ease-in' } : {}}
        onClick={e => e.stopPropagation()}
      >
        <div className="welcome-header">
          <div className="welcome-title-row">
            <h1 className="welcome-title">Welcome to <span className="welcome-title-accent">Flux</span></h1>
            <span className="welcome-beta">BETA</span>
          </div>
          <p className="welcome-subtitle">
            A tagged and curated library of maths exam questions - past papers, mark schemes and examiner reports, but better :D
          </p>
        </div>

        <div className="welcome-body">
          <div>
            <p className="welcome-section-label">How it works</p>
            <div className="welcome-cards">
              {STEPS.map(s => (
                <div key={s.num} className="welcome-card">
                  <div className="welcome-card-top">
                    <span className="welcome-step-num">{s.num}</span>
                    <span className="welcome-step-title">{s.title}</span>
                  </div>
                  <p className="welcome-card-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="welcome-section-label">Latest Updates</p>
            <div className="welcome-changelog">
              {clLoading ? (
                <>
                  <div className="skel" style={{ height: 14 }} />
                  <div className="skel" style={{ height: 14, width: '75%' }} />
                  <div className="skel" style={{ height: 14, width: '60%' }} />
                </>
              ) : (
                changelog.map((e, i) => (
                  <div key={i} className="welcome-cl-item">
                    <span className="welcome-cl-date">{formatDate(e.date)}</span>
                    <span className="welcome-cl-msg">{truncate(e.message)}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="welcome-warning">
          <span>—</span>
          <p>Flux is still finding its feet lol. Some exam boards in the library are completely empty, and things may randomly break.</p>
        </div>

        <div className="welcome-footer">
          <button type="button" className="welcome-enter" onClick={close}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
