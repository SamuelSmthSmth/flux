import { useEffect, useRef, type ReactNode } from "react";

/**
 * Renders a ```tikz code block via TikZJax (self-hosted in /tikzjax/ and
 * loaded from index.html).
 *
 * CRITICAL: TikZJax observes the DOM and *replaces* our
 * <script type="text/tikz"> element with a .tikzjax-wrapper span. If React
 * ever owned that script node (or re-rendered this subtree), its later
 * reconciliation would call removeChild on a node TikZJax already took and
 * crash the whole app ("The node to be removed is not a child of this node").
 * So this component renders an EMPTY div that React never populates, and
 * does all DOM work imperatively — no state, no re-renders, no owned nodes.
 */
export function TikZDiagram({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const note = document.createElement("div");
    note.className = "tikz-diagram-note";
    note.textContent = "Rendering diagram…";
    el.replaceChildren(note);

    const script = document.createElement("script");
    script.type = "text/tikz";
    script.textContent = code;
    el.appendChild(script);

    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      const svg = el.querySelector(".tikzjax-wrapper svg") || el.querySelector("svg");
      if (svg) {
        window.clearInterval(timer);
        el.setAttribute("data-tikz-status", "rendered");
        note.remove();
      } else if (tries > 100) {
        // ~25s — the TeX core dump + first compile is slow; only then give up
        window.clearInterval(timer);
        note.textContent = "Diagram failed to render";
        el.setAttribute("data-tikz-status", "error");
      }
    }, 250);

    return () => {
      window.clearInterval(timer);
      el.replaceChildren();
    };
  }, [code]);

  return <div className="tikz-diagram" ref={ref} />;
}

/**
 * react-markdown `pre` component override that unwraps ```tikz fenced
 * blocks into <TikZDiagram> while leaving every other code block untouched.
 */
export function TikzPre({ children }: { children?: ReactNode }) {
  const kids = Array.isArray(children) ? children : [children];
  const codeEl = kids[0] as
    | (ReactNode & { props?: { className?: unknown; children?: ReactNode } })
    | undefined;
  const cls = typeof codeEl?.props?.className === "string" ? codeEl.props.className : "";
  if (cls.includes("language-tikz")) {
    const src = Array.isArray(codeEl?.props?.children)
      ? codeEl.props.children.join("")
      : String(codeEl?.props?.children ?? "");
    return <TikZDiagram code={src} />;
  }
  return <pre>{children}</pre>;
}
