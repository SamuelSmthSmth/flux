import { useState, useEffect, useRef } from "react";

interface Commit { sha: string; commit: { message: string; author: { date: string } }; }
interface FallbackEntry { message: string; date: string; }

const GITHUB_USER = "SamuelSmthSmth";
const GITHUB_REPO = "misty";

const FALLBACK: FallbackEntry[] = [
  { message: "Misty Beta — Edexcel & AEA past-papers integrated.", date: new Date().toISOString() },
  { message: "Topic browser rebuilt with full taxonomy search.", date: new Date().toISOString() },
  { message: "Mark schemes & examiner reports now inline per question.", date: new Date().toISOString() },
];

const TOUR = [
  {
    name: "How Flux works",
    desc: "Filter thousands of A-Level past-paper questions by topic, exam board, and tier. Every question comes with its official mark scheme and examiner commentary.",
    detail: "Step 1 — Choose Standard (A-Level) or Advanced (extension). Step 2 — Browse the full topic taxonomy and pick what you need. Step 3 — Get real exam questions with mark schemes and examiner notes inline.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function truncate(msg: string, max = 66) {
  const f = msg.split("\n")[0];
  return f.length > max ? f.slice(0, max) + "…" : f;
}

function ExpandPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(ref.current.scrollHeight); }, [open, children]);
  return (
    <div style={{ maxHeight: open ? `${h}px` : "0px", overflow: "hidden", transition: "max-height 0.3s ease" }}>
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [changelog, setChangelog] = useState<FallbackEntry[]>([]);
  const [clLoading, setClLoading] = useState(true);

  useEffect(() => { if (!localStorage.getItem("misty_welcomed")) setVisible(true); }, []);

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

  const close = () => {
    setClosing(true);
    setTimeout(() => { setVisible(false); setClosing(false); localStorage.setItem("misty_welcomed", "true"); }, 300);
  };

  if (!visible) {
    return (
      <button type="button" aria-label="Help" className="welcome-help-btn" onClick={() => setVisible(true)}>
        ?
      </button>
    );
  }

  return (
    <div className="welcome-backdrop" style={{ opacity: closing ? 0 : 1, transition: 'opacity 0.25s' }} aria-modal="true" role="dialog">
      <div className="welcome-container" style={closing ? { opacity: 0, transform: 'translateY(16px)', transition: 'all 0.25s ease-in' } : {}}>
        <div className="welcome-header">
          <div className="welcome-title-row">
            <h1 className="welcome-title">Welcome to <span className="welcome-title-accent">Misty</span></h1>
            <span className="welcome-beta">BETA</span>
          </div>
          <p className="welcome-subtitle">A searchable question bank for advanced mathematics.</p>
        </div>

        <div className="welcome-body">
          <div>
            <p className="welcome-section-label">How it works</p>
            <div className="welcome-cards">
              {TOUR.map(s => {
                const open = expanded === s.name;
                return (
                  <div key={s.name} role="button" tabIndex={0} aria-expanded={open}
                    className={`welcome-card ${open ? 'open' : ''}`}
                    onClick={() => setExpanded(open ? null : s.name)}
                    onKeyDown={e => (e.key === "Enter" || e.key === " ") && setExpanded(open ? null : s.name)}
                  >
                    <div className="welcome-card-top">
                      <span className="welcome-card-tag">Flux</span>
                      <span className={`welcome-card-chevron ${open ? 'open' : ''}`} aria-hidden="true">›</span>
                    </div>
                    <p className="welcome-card-desc">{s.desc}</p>
                    <ExpandPanel open={open}>
                      <div className="welcome-card-how" style={{ borderTop: '1px solid var(--border)' }}>
                        <p>{s.detail}</p>
                      </div>
                    </ExpandPanel>
                  </div>
                );
              })}
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
          <p>Misty is in active development. Content may be incomplete.</p>
        </div>

        <div className="welcome-footer">
          <button type="button" className="welcome-enter" onClick={close}>
            Enter Flux
          </button>
        </div>
      </div>
    </div>
  );
}