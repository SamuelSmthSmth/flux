import { useState } from "react";
import { useBriefcase } from "../briefcase-context";
import { BriefcaseIcon } from "../briefcase";

export type CoverStyle = "eco" | "official";

interface BriefcaseDrawerProps {
  onExport: (style: CoverStyle, includeAnswers: boolean) => void;
}

export function BriefcaseDrawer({ onExport }: BriefcaseDrawerProps) {
  const { items, isOpen, close, remove, move, clear } = useBriefcase();
  const [modalOpen, setModalOpen] = useState(false);
  const [includeAnswers, setIncludeAnswers] = useState(true);

  if (!isOpen) return null;

  const handlePick = (style: CoverStyle) => {
    setModalOpen(false);
    close();
    onExport(style, includeAnswers);
  };

  return (
    <>
      <div className="briefcase-overlay" onClick={close} role="presentation">
        <div
          className="briefcase-drawer"
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="The Briefcase"
        >
          <div className="briefcase-header">
            <div className="briefcase-title-row">
              <BriefcaseIcon size={18} />
              <h3 className="briefcase-title">The Briefcase</h3>
            </div>
            <button className="briefcase-close" onClick={close} type="button" title="Close">
              ✕
            </button>
          </div>

          <div className="briefcase-list">
            {items.length === 0 ? (
              <div className="briefcase-empty">
                <span className="briefcase-empty-icon">[ ]</span>
                <p className="briefcase-empty-title">Nothing collected yet.</p>
                <p className="story-note">add questions with the briefcase icon — they'll wait here.</p>
              </div>
            ) : (
              items.map((item, idx) => (
                <div key={item.id} className="briefcase-item">
                  <div className="briefcase-item-main">
                    <span className="briefcase-item-title">{item.title}</span>
                    <span className="briefcase-item-meta">{item.meta}</span>
                  </div>
                  <div className="briefcase-item-actions">
                    <button
                      className="briefcase-item-btn"
                      disabled={idx === 0}
                      onClick={() => move(item.id, -1)}
                      title="Move up"
                      type="button"
                    >
                      ↑
                    </button>
                    <button
                      className="briefcase-item-btn"
                      disabled={idx === items.length - 1}
                      onClick={() => move(item.id, 1)}
                      title="Move down"
                      type="button"
                    >
                      ↓
                    </button>
                    <button
                      className="briefcase-item-btn briefcase-item-remove"
                      onClick={() => remove(item.id)}
                      title="Remove"
                      type="button"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="briefcase-footer">
            <button
              className="briefcase-export-btn"
              disabled={items.length === 0}
              onClick={() => setModalOpen(true)}
              type="button"
            >
              <BriefcaseIcon size={15} /> Create / Export PDF
            </button>
            {items.length > 0 && (
              <button className="briefcase-clear" onClick={clear} type="button">
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="briefcase-modal-backdrop" onClick={() => setModalOpen(false)} role="presentation">
          <div
            className="briefcase-modal"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Print or export PDF"
          >
            <h3 className="briefcase-modal-title">Print / Export PDF</h3>
            <p className="briefcase-modal-sub">Select your preferred cover page style.</p>

            <div className="cover-cards">
              <button className="cover-card" onClick={() => handlePick("eco")} type="button">
                <div className="cover-thumb cover-thumb-eco">
                  <span className="cover-thumb-title">Worksheet</span>
                </div>
                <strong className="cover-card-name">Eco Print</strong>
                <span className="cover-card-desc">White cover — a simple worksheet</span>
              </button>
              <button className="cover-card" onClick={() => handlePick("official")} type="button">
                <div className="cover-thumb cover-thumb-official">
                  <span className="paper-thumb-topline" />
                  <span className="paper-thumb-box">FLUX<br /><b>ADVANCED<br />MATHEMATICS</b></span>
                  <span className="paper-thumb-lines" />
                </div>
                <strong className="cover-card-name">Official Paper</strong>
                <span className="cover-card-desc">Exam-board layout — candidate boxes, ruled space and marks</span>
              </button>
            </div>

            <label className="briefcase-toggle">
              <input
                type="checkbox"
                checked={includeAnswers}
                onChange={e => setIncludeAnswers(e.target.checked)}
              />
              <span>Include mark scheme pages at the end</span>
            </label>

            <div className="briefcase-modal-actions">
              <button className="briefcase-modal-cancel" onClick={() => setModalOpen(false)} type="button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
