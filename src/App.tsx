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

/* ─── Flux Intro Splash ─────────────────────────────────────── */

function FluxIntro({ onDone, isFirstTime }: { onDone: () => void, isFirstTime: boolean }) {
  const fadeDelay = isFirstTime ? 800 : 350;
  const fadeDuration = isFirstTime ? 500 : 350;
  const letterDuration = isFirstTime ? 2000 : 900;
  const letterStagger = isFirstTime ? 80 : 40;

  useEffect(() => {
    const t = setTimeout(onDone, fadeDelay + fadeDuration);
    return () => clearTimeout(t);
  }, [onDone, fadeDelay, fadeDuration]);

  return (
    <div className="flux-intro" aria-hidden="true" style={{ 
      animation: `flux-intro-fade-out ${fadeDuration}ms ease ${fadeDelay}ms forwards`
    }}>
      <div className="flux-intro-word">
        {"FLUX".split("").map((letter, i) => {
          // Generate deterministic pseudo-random values based on index
          const rx = Math.sin(i * 1.5) * 2;
          const ry = Math.cos(i * 2.1) * 2;
          const rz = Math.sin(i * 3.7);
          return (
            <span key={i} className="flux-intro-letter" style={{ 
              animation: `flux-letter-assemble ${letterDuration}ms cubic-bezier(0.1, 0.9, 0.2, 1) forwards`,
              animationDelay: `${i * letterStagger}ms`,
              '--rx': rx,
              '--ry': ry,
              '--rz': rz
            } as React.CSSProperties}>
              {letter}
            </span>
          );
        })}
      </div>
      <div className="flux-intro-loader" style={{ animationDuration: `${fadeDelay + fadeDuration}ms` }} />
    </div>
  );
}

/* ─── Theme system ──────────────────────────────────────────── */

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem("flux-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("flux-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme(t => t === "light" ? "dark" : "light"),
  };
}

/* ─── App Shell ─────────────────────────────────────────────── */

function AppShell() {
  const { theme, toggleTheme } = useTheme();
  const [introVisible, setIntroVisible] = useState(true);
  const [isFirstTime] = useState(() => !localStorage.getItem("flux-intro-played"));

  const handleIntroDone = useCallback(() => {
    setIntroVisible(false);
    localStorage.setItem("flux-intro-played", "1");
  }, []);

  return (
    <div className="flux-app">
      {introVisible && <FluxIntro onDone={handleIntroDone} isFirstTime={isFirstTime} />}

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

      {/* Floating Controls */}
      <div className="floating-controls-tr">
        <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode" type="button">
          {theme === "light" ? <IconMoon size={18} /> : <IconSun size={18} />}
        </button>
      </div>

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
