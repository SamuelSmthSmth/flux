import { useMemo } from "react";
import { parseQuestionParts, extractTotalMarks } from "../lib/questionParts";
import { FigureAwareMarkdown } from "./FluxMarkdown";

/** Renders a question's markdown as labeled parts — part letters inline with
 *  their text, per-part marks right-aligned, and the "(Total N marks)" line
 *  below — the same treatment the printed paper uses. */
export function QuestionParts({ md }: { md?: string }) {
  const parts = useMemo(() => parseQuestionParts(md), [md]);
  const total = useMemo(() => extractTotalMarks(md), [md]);

  return (
    <div className="qcard-parts">
      {parts.map((part, i) => (
        <div className="official-part" key={i}>
          {part.body && (
            <div className="official-part-body">
              {part.label && <strong className="official-part-label">{part.label}</strong>}{" "}
              <FigureAwareMarkdown>{part.body}</FigureAwareMarkdown>
            </div>
          )}
          {part.marks != null && <span className="official-part-marks">({part.marks})</span>}
        </div>
      ))}
      {total != null && <div className="qcard-total">(Total {total} marks)</div>}
    </div>
  );
}
