import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/* ─── Types ──────────────────────────────────────────────────── */

/** The slice of a question doc the briefcase needs to display + export. */
export interface BriefcaseItem {
  id: string;
  title: string; // "Edexcel AEA 2020 P1 Q3"
  meta: string;  // "board · topic" short line
  topic: string;
  subtopic: string;
  problem_markdown?: string;
  mark_scheme_markdown?: string;
  examiner_report_markdown?: string;
}

/** Shape of the question docs coming out of Firestore (loose, as in FluxPage). */
export interface BriefcaseDoc {
  id: string;
  board?: string;
  subBoard?: string;
  year?: string;
  paper?: string;
  question_number?: string;
  question?: string;
  topic?: string;
  subtopic?: string;
  problem_markdown?: string;
  mark_scheme_markdown?: string;
  examiner_report_markdown?: string;
  markScheme?: string;
  examinerNotes?: string;
  [key: string]: unknown;
}

export interface BriefcaseContextValue {
  items: BriefcaseItem[];
  count: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: (doc: BriefcaseDoc) => void;
  isSelected: (id: string) => boolean;
  remove: (id: string) => void;
  move: (id: string, dir: -1 | 1) => void;
  clear: () => void;
}

/* ─── Context ────────────────────────────────────────────────── */

export const BriefcaseContext = createContext<BriefcaseContextValue | null>(null);

const STORAGE_KEY = "flux_briefcase";
const MAX_ITEMS = 25;

/* ─── Helpers ───────────────────────────────────────────────── */

export function docToItem(doc: BriefcaseDoc): BriefcaseItem {
  const board = String(doc.board ?? "").trim();
  const yr = String(doc.year ?? "").trim();
  const paper = String(doc.paper ?? "").trim();
  const qn = String(doc.question_number ?? doc.question ?? "").trim();
  const topic = doc.topic ?? "";
  return {
    id: doc.id,
    title: [board, yr, paper, qn ? `Q${qn}` : ""].filter(Boolean).join(" "),
    meta: [doc.subBoard ?? "", topic].filter(Boolean).join(" · "),
    topic,
    subtopic: doc.subtopic ?? "",
    problem_markdown: doc.problem_markdown ?? doc.question,
    mark_scheme_markdown: doc.mark_scheme_markdown ?? doc.markScheme,
    examiner_report_markdown: doc.examiner_report_markdown ?? doc.examinerNotes,
  };
}

export function loadBriefcase(): BriefcaseItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(0, MAX_ITEMS);
    }
  } catch { /* corrupted storage — start fresh */ }
  return [];
}

export function persistBriefcase(items: BriefcaseItem[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch { /* storage full */ }
}

/* ─── Hook ───────────────────────────────────────────────────── */

export function useBriefcase(): BriefcaseContextValue {
  const ctx = useContext(BriefcaseContext);
  if (!ctx) throw new Error("useBriefcase must be used inside <BriefcaseProvider>");
  return ctx;
}

/* ─── Provider helpers (component lives in briefcase.tsx) ───── */

export function useBriefcaseState() {
  const [items, setItems] = useState<BriefcaseItem[]>(loadBriefcase);
  const [isOpen, setIsOpen] = useState(false);

  // Persist the briefcase so a paper survives refreshes.
  useEffect(() => { persistBriefcase(items); }, [items]);

  // Forge mode: while at least one question is collected, flip the whole
  // site's accent to red-orange (CSS `[data-forge="true"]` overrides).
  useEffect(() => {
    const root = document.documentElement;
    if (items.length > 0) root.setAttribute("data-forge", "true");
    else root.removeAttribute("data-forge");
  }, [items.length]);

  const toggle = useCallback((doc: BriefcaseDoc) => {
    setItems(prev => {
      if (prev.some(i => i.id === doc.id)) return prev.filter(i => i.id !== doc.id);
      if (prev.length >= MAX_ITEMS) return prev;
      return [...prev, docToItem(doc)];
    });
  }, []);

  const isSelected = useCallback((id: string) => items.some(i => i.id === id), [items]);

  const remove = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const move = useCallback((id: string, dir: -1 | 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === id);
      if (idx < 0) return prev;
      const target = idx + dir;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[idx], next[target]] = [next[target], next[idx]];
      return next;
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<BriefcaseContextValue>(() => ({
    items,
    count: items.length,
    isOpen,
    open,
    close,
    toggle,
    isSelected,
    remove,
    move,
    clear,
  }), [items, isOpen, open, close, toggle, isSelected, remove, move, clear]);

  return value;
}
