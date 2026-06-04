import { useEffect, useRef } from 'react';

interface GeoGebraProps {
  id: string;
  appName?: 'graphing' | 'geometry' | '3d' | 'cas' | 'scientific' | 'classic';
}

type GGBAppletConstructor = new (
  ...args: unknown[]
) => { inject: (target: string) => void };

type GGBWindow = Window & { GGBApplet?: GGBAppletConstructor };

function getGgbWindow(): GGBWindow {
  return window as unknown as GGBWindow;
}

export function GeoGebraWrapper({ id, appName = 'graphing' }: GeoGebraProps) {
  const containerId = `ggb-${id}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mountPoint = document.getElementById(containerId);
    if (mountPoint) mountPoint.innerHTML = '';

    let cancelled = false;

    const initApplet = () => {
      const GGBApplet = getGgbWindow().GGBApplet;
      if (cancelled || !GGBApplet) return;

      const width = container.clientWidth || 600;
      const height = container.clientHeight || 400;

      const params = {
        appName,
        width,
        height,
        showToolBar: true,
        showAlgebraInput: true,
        showMenuBar: false,
        enableRightClick: true,
        enableShiftDragZoom: true,
        useBrowserForJS: false,
        appletOnLoad: (api: { setSize: (w: number, h: number) => void }) => {
          resizeObserverRef.current?.disconnect();
          resizeObserverRef.current = new ResizeObserver((entries) => {
            for (const entry of entries) {
              const { width: w, height: h } = entry.contentRect;
              if (w > 0 && h > 0) api.setSize(Math.floor(w), Math.floor(h));
            }
          });
          resizeObserverRef.current.observe(container);
        },
      };

      const applet = new GGBApplet(params, true);
      applet.inject(containerId);
    };

    if (getGgbWindow().GGBApplet) {
      initApplet();
    } else if (!document.querySelector('script[data-geogebra-deploy]')) {
      const script = document.createElement('script');
      script.src = 'https://www.geogebra.org/apps/deployggb.js';
      script.async = true;
      script.dataset.geogebraDeploy = 'true';
      script.onload = initApplet;
      document.head.appendChild(script);
    } else {
      const poll = window.setInterval(() => {
        if (getGgbWindow().GGBApplet) {
          window.clearInterval(poll);
          initApplet();
        }
      }, 50);
      return () => {
        cancelled = true;
        window.clearInterval(poll);
        resizeObserverRef.current?.disconnect();
      };
    }

    return () => {
      cancelled = true;
      resizeObserverRef.current?.disconnect();
      if (mountPoint) mountPoint.innerHTML = '';
    };
  }, [appName, containerId]);

  return (
    <div ref={containerRef} className="geogebra-wrapper-host">
      <div id={containerId} className="geogebra-wrapper-mount" />
    </div>
  );
}
