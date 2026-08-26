import { useMemo } from "react";

const SYMBOLS = [
  "∑", "∫", "√", "π", "∞", "∂", "λ", "φ", "θ",
  "α", "β", "γ", "δ", "ε", "Δ", "Ω", "σ", "µ",
  "≈", "≠", "±", "×", "÷", "∈", "∀", "∃", "⇒", "∇",
];

const EQUATIONS = [
  "1 + 1 = 2",
  "2 + 3 = 5",
  "a² + b² = c²",
  "x² + y² = r²",
  "e^(iπ) + 1 = 0",
  "∫₀¹ x² dx = ⅓",
  "d/dx eˣ = eˣ",
  "sin²θ + cos²θ = 1",
  "dy/dx = 2x",
  "∑ k = n(n+1)/2",
  "√2 ≈ 1.414",
  "log₂ 8 = 3",
  "5! = 120",
  "∇²φ = 0",
  "x³ − 3x = 0",
  "f(x) = x² + 1",
  "π ≈ 3.14",
  "3x + 5 = 14",
];

interface SymbolSpec {
  kind: "symbol" | "eq";
  text: string;
  left: number;
  top: number;
  size: number;   // vw
  peak: number;   // max opacity
  life: number;   // lifecycle seconds
  delay: number;  // negative seconds
  jiggle: number; // seconds
  jdelay: number;
  depth: number;  // parallax px
  tilt: number;   // deg
  dx: number;     // horizontal drift amplitude px
  dy: number;     // vertical drift amplitude px
  dxs: number;    // horizontal drift duration s
  dys: number;    // vertical drift duration s
  ddelay: number; // negative seconds, drift phase offset
}

/* Deterministic PRNG so the scatter stays stable across renders */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function MathSymbolsBackdrop({ count = 24 }: { count?: number }) {
  const specs = useMemo<SymbolSpec[]>(() => {
    const rand = mulberry32(0xF10F1A);
    return Array.from({ length: count }, (_, i) => {
      // Roughly every third item is a drawn equation, the rest lone glyphs
      const isEq = i % 3 === 2;
      const text = isEq
        ? EQUATIONS[i % EQUATIONS.length]
        : SYMBOLS[i % SYMBOLS.length];
      return {
        kind: isEq ? "eq" : "symbol",
        text,
        left: rand() * 92 + 3,
        top: rand() * 86 + 5,
        size: isEq ? 1.1 + rand() * 1.1 : 1.5 + rand() * 2.2,
        peak: 0.08 + rand() * 0.07,
        life: 22 + rand() * 18,
        delay: -rand() * 40,
        jiggle: 3 + rand() * 1.6,
        jdelay: -rand() * 4,
        depth: -34 + rand() * 68,
        tilt: -8 + rand() * 16,
        // Independent per-axis drift: random amplitude, speed and phase on
        // each axis so symbols wander smoothly in every direction.
        dx: 26 + rand() * 46,
        dy: 30 + rand() * 46,
        dxs: 11 + rand() * 9,
        dys: 9 + rand() * 10,
        ddelay: -rand() * 18,
      };
    });
  }, [count]);

  return (
    <div className="math-symbols" aria-hidden="true">
      {specs.map((s, i) => (
        <span
          key={i}
          className={`math-symbol ${s.kind === "symbol" ? "no-solve" : ""}`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `clamp(12px, ${s.size}vw, ${s.kind === "eq" ? "2.6rem" : "3.2rem"})`,
            "--peak": s.peak,
            "--life": `${s.life}s`,
            "--delay": `${s.delay}s`,
            "--depth": `${s.depth}px`,
            "--tilt": `${s.tilt}deg`,
            "--jiggle": `${s.jiggle}s`,
            "--jdelay": `${s.jdelay}s`,
            "--dx": `${s.dx}px`,
            "--dy": `${s.dy}px`,
            "--dxs": `${s.dxs}s`,
            "--dys": `${s.dys}s`,
            "--ddelay": `${s.ddelay}s`,
          } as React.CSSProperties}
        >
          <span className="math-drift-x">
            <span className="math-drift-y">
              <span className="math-glyph">{s.text}</span>
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
