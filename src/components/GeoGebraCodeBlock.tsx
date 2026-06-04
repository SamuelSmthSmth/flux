interface GeoGebraCodeBlockProps {
  code: string;
  onOpenCalculator: () => void;
}

export function GeoGebraCodeBlock({ code, onOpenCalculator }: GeoGebraCodeBlockProps) {
  return (
    <div className="geogebra-block">
      <div className="geogebra-block-header">
        <span className="geogebra-block-label">GeoGebra Sandbox</span>
        <button type="button" className="geogebra-block-btn" onClick={onOpenCalculator}>
          Open calculator
        </button>
      </div>
      <pre className="geogebra-block-code">
        <code>{code}</code>
      </pre>
    </div>
  );
}
