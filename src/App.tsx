import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import FluxPage from "./pages/FluxPage";
import WelcomeModal from "./components/WelcomeModal";
import { MathSymbolsBackdrop } from "./components/MathSymbolsBackdrop";

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

const INTRO_VARIANTS = ["assemble", "scribble", "flicker", "cascade", "wave", "flip", "pop", "typewrite"] as const;
type IntroVariant = (typeof INTRO_VARIANTS)[number];

const VARIANT_CONFIG: Record<IntroVariant, { duration: number; stagger: number }> = {
  assemble: { duration: 2000, stagger: 80 },
  scribble: { duration: 2100, stagger: 110 },
  flicker: { duration: 1800, stagger: 60 },
  cascade: { duration: 1700, stagger: 75 },
  wave: { duration: 1900, stagger: 90 },
  flip: { duration: 2100, stagger: 95 },
  pop: { duration: 1600, stagger: 70 },
  typewrite: { duration: 1800, stagger: 90 },
};

function FluxIntro({ onDone, isFirstTime }: { onDone: () => void, isFirstTime: boolean }) {
  // Variants play in a fixed persisted cycle → everyone sees every intro, in order
  const [variant] = useState<IntroVariant>(() => {
    const idx = Math.max(0, parseInt(localStorage.getItem("flux-intro-index") ?? "0", 10) || 0);
    localStorage.setItem("flux-intro-index", String(idx + 1));
    return INTRO_VARIANTS[idx % INTRO_VARIANTS.length];
  });

  const cfg = VARIANT_CONFIG[variant];
  const letterDuration = isFirstTime ? cfg.duration : Math.round(cfg.duration * 0.45);
  const letterStagger = isFirstTime ? cfg.stagger : Math.max(30, Math.round(cfg.stagger * 0.5));
  // Let the last letter land (and the scribble underline swipe) before fading out,
  // so no variant is ever cut off mid-animation.
  const settleMs = letterDuration + letterStagger * 3;
  const underlineDelay = (settleMs / 1000).toFixed(3);
  const fadeDelay = (settleMs + (variant === "scribble" ? 500 : 0)) / 1000;
  const fadeDuration = isFirstTime ? 500 : 350;

  useEffect(() => {
    const t = setTimeout(onDone, fadeDelay + fadeDuration);
    return () => clearTimeout(t);
  }, [onDone, fadeDelay, fadeDuration]);

  return (
    <div className="flux-intro" data-intro={variant} aria-hidden="true" style={{
      animation: `flux-intro-fade-out ${fadeDuration}ms ease ${fadeDelay}ms forwards`
    }}>
      <div className="flux-intro-stage">
        <div className="flux-intro-word">
          {"FLUX".split("").map((letter, i) => {
            // Deterministic per-letter values for the assemble variant
            const rx = Math.sin(i * 1.5) * 2;
            const ry = Math.cos(i * 2.1) * 2;
            const rz = Math.sin(i * 3.7);
            return (
              <span
                key={i}
                className="flux-intro-letter"
                style={{
                  animationDelay: `${i * letterStagger}ms`,
                  '--ldur': `${letterDuration}ms`,
                  '--rx': rx,
                  '--ry': ry,
                  '--rz': rz,
                  '--tilt': `${-6 + i * 2.4}deg`,
                  '--jitter': `${8 + i * 4}px`,
                } as React.CSSProperties}
              >
                {letter}
              </span>
            );
          })}
          {variant === "typewrite" && <span className="flux-intro-caret" aria-hidden="true" />}
        </div>
        {variant === "scribble" && (
          <div className="flux-intro-underline" style={{ animationDelay: `${underlineDelay}s` }} />
        )}
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

/* ─── Mouse parallax ────────────────────────────────────────── */

function useMouseParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mx = e.clientX / window.innerWidth - 0.5;
        const my = e.clientY / window.innerHeight - 0.5;
        const root = document.documentElement;
        root.style.setProperty("--mx", mx.toFixed(4));
        root.style.setProperty("--my", my.toFixed(4));
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/* ─── App Shell ─────────────────────────────────────────────── */

function AppShell() {
  const { theme, toggleTheme } = useTheme();
  useMouseParallax();
  const [introVisible, setIntroVisible] = useState(true);
  const [isFirstTime] = useState(() => !localStorage.getItem("flux-intro-played"));

  const handleIntroDone = useCallback(() => {
    setIntroVisible(false);
    localStorage.setItem("flux-intro-played", "1");
  }, []);

  return (
    <div className="flux-app">
      {introVisible && <FluxIntro onDone={handleIntroDone} isFirstTime={isFirstTime} />}

      {/* Parallax background */}
      <div className="app-bg" aria-hidden="true">
        <div className="app-bg-grid" />
        <div className="app-bg-glow app-bg-glow-1" />
        <div className="app-bg-glow app-bg-glow-2" />
        <MathSymbolsBackdrop />
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
