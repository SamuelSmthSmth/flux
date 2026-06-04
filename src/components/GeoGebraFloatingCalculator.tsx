import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Rnd } from 'react-rnd';
import { GeoGebraWrapper } from './GeoGebraWrapper';

const APP_TYPES = ['graphing', 'geometry', '3d', 'cas'] as const;
export type GeoGebraAppType = (typeof APP_TYPES)[number];

interface GeoGebraFloatingCalculatorProps {
  open: boolean;
  onClose: () => void;
  activeApp: GeoGebraAppType;
  onAppChange: (app: GeoGebraAppType) => void;
}

function getDefaultPosition() {
  const width = 640;
  const height = 480;
  const margin = 24;
  const x = Math.max(margin, window.innerWidth - width - margin);
  const y = Math.max(margin, window.innerHeight - height - margin);
  return { x, y, width, height };
}

export function GeoGebraFloatingCalculator({
  open,
  onClose,
  activeApp,
  onAppChange,
}: GeoGebraFloatingCalculatorProps) {
  const [mounted, setMounted] = useState(false);
  const [defaultBounds] = useState(getDefaultPosition);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <Rnd
      default={defaultBounds}
      minWidth={380}
      minHeight={280}
      bounds="window"
      dragHandleClassName="geogebra-float-drag"
      className="geogebra-float-window"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
    >
      <div className="geogebra-float-inner">
        <div className="geogebra-float-drag">
          <div className="geogebra-float-drag-title">
            <span className="geogebra-float-drag-grip" aria-hidden="true" />
            <span>GeoGebra</span>
          </div>

          <div className="geogebra-float-tabs" onPointerDown={(e) => e.stopPropagation()}>
            {APP_TYPES.map((appType) => (
              <button
                key={appType}
                type="button"
                onClick={() => onAppChange(appType)}
                className={`geogebra-float-tab ${activeApp === appType ? 'active' : ''}`}
              >
                {appType}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="geogebra-float-close"
            onClick={onClose}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label="Close calculator"
          >
            ✕
          </button>
        </div>

        <div className="geogebra-float-body">
          <GeoGebraWrapper appName={activeApp} id={`floating-${activeApp}`} key={activeApp} />
        </div>
      </div>
    </Rnd>,
    document.body
  );
}
