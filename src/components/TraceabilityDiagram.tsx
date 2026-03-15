interface TraceabilityDiagramProps {
  accentColor: string;
}

export function TraceabilityDiagram({ accentColor }: TraceabilityDiagramProps) {
  const steps = [
    { id: "1", label: "Material Sourcing", desc: "Suppliers generate Material ID" },
    { id: "2", label: "DPP Generation", desc: "QR/RFID at manufacturing" },
    { id: "3", label: "Lifecycle Monitoring", desc: "Track ownership & location" },
    { id: "4", label: "Circular Recovery", desc: "End-of-life material data" },
  ];

  return (
    <div className="traceability-diagram">
      <div className="traceability-loop">
        {steps.map((step, i) => (
          <div key={step.id} className="traceability-step">
            <div
              className="traceability-node"
              style={{
                borderColor: accentColor,
                boxShadow: `0 0 8px ${accentColor}30`,
              }}
            >
              <span className="traceability-id">{step.id}</span>
              <span className="traceability-label">{step.label}</span>
            </div>
            <p className="traceability-desc">{step.desc}</p>
            {i < steps.length - 1 && (
              <div
                className="traceability-arrow"
                style={{ color: `${accentColor}` }}
              >
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="traceability-legend">
        <span style={{ color: accentColor }}>●</span> Data flow: Physical → Digital → Circular
      </div>
    </div>
  );
}
