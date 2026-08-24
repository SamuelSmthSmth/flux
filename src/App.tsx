import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import FluxPage from "./pages/FluxPage";
import WelcomeModal from "./components/WelcomeModal";

/* ─── SVG icons ─────────────────────────────────────────────── */

function IconSun({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function IconMoon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function IconNotebook({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function IconGrid({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function IconXP({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" />
      <line x1="3" y1="14" x2="21" y2="14" />
    </svg>
  );
}

/* ─── Theme system ──────────────────────────────────────────── */

type Vibe = "editorial" | "notebook" | "xp";
const VIBE_CYCLE: Vibe[] = ["editorial", "notebook", "xp"];

function VibeIcon({ vibe, size = 14 }: { vibe: Vibe; size?: number }) {
  if (vibe === "notebook") return <IconNotebook size={size} />;
  if (vibe === "xp") return <IconXP size={size} />;
  return <IconGrid size={size} />;
}

function VibeLabel({ vibe }: { vibe: Vibe }) {
  if (vibe === "notebook") return "Notebook";
  if (vibe === "xp") return "Windows XP";
  return "Editorial";
}

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem("misty-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [vibe, setVibe] = useState<Vibe>(() => {
    const saved = localStorage.getItem("misty-vibe");
    return (saved && VIBE_CYCLE.includes(saved as Vibe) ? saved : "editorial") as Vibe;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("misty-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-vibe", vibe);
    localStorage.setItem("misty-vibe", vibe);
  }, [vibe]);

  const cycleVibe = useCallback(() => {
    setVibe(prev => VIBE_CYCLE[(VIBE_CYCLE.indexOf(prev) + 1) % VIBE_CYCLE.length]);
  }, []);

  return {
    theme, vibe,
    toggleTheme: () => setTheme(t => t === "light" ? "dark" : "light"),
    cycleVibe,
  };
}

/* ─── App Shell ─────────────────────────────────────────────── */

function AppShell() {
  const { theme, vibe, toggleTheme, cycleVibe } = useTheme();
  const nextVibe = VIBE_CYCLE[(VIBE_CYCLE.indexOf(vibe) + 1) % VIBE_CYCLE.length];

  return (
    <div className="misty-app">
      {/* Scribble SVG filter for notebook theme */}
      <svg className="app-scribble-filter" aria-hidden="true" style={{ position: 'fixed', width: 0, height: 0 }}>
        <defs>
          <filter id="scribble">
            <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Animated background */}
      <div className="app-bg" aria-hidden="true">
        <div className="app-bg-grid" />
        <div className="app-bg-glow app-bg-glow-1" />
        <div className="app-bg-glow app-bg-glow-2" />
      </div>

      <WelcomeModal />

      {/* Nav with gradient fade inner */}
      <nav className="nav">
        <div className="nav-inner" aria-hidden="true" />
        <div className="nav-brand">
          <div className="nav-logo">M</div>
          <span className="nav-wordmark">
            <span className="nav-wordmark-accent">Misty</span>
          </span>
        </div>

        <div className="nav-right">
          <button className="theme-switch-btn" onClick={cycleVibe} type="button"
            title={`Switch to ${VibeLabel({ vibe: nextVibe })} theme`}>
            <VibeIcon vibe={nextVibe} size={14} />
            <VibeLabel vibe={nextVibe} />
          </button>

          <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode" type="button">
            {theme === "light" ? <IconMoon size={18} /> : <IconSun size={18} />}
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/*" element={<FluxPage />} />
      </Routes>

      <Analytics />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
