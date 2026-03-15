interface MedSynDiagramProps {
  accentColor: string;
}

export function MedSynDiagram({ accentColor }: MedSynDiagramProps) {
  const items = [
    {
      label: "Data Aggregation",
      desc: "EHR, research journals, real-time lab results",
    },
    {
      label: "The HCI Logic",
      desc: "Information Saliency—vitals & allergies prioritized over secondary research",
    },
    {
      label: "User Flow",
      desc: "Scan and act in under 30 seconds for high-stress environments",
    },
  ];

  return (
    <div className="traceability-diagram medsyn-diagram">
      <div className="traceability-loop">
        {items.map((step, i) => (
          <div key={i} className="traceability-step">
            <div
              className="traceability-node"
              style={{
                borderColor: accentColor,
                boxShadow: `0 0 8px ${accentColor}30`,
              }}
            >
              <span className="traceability-label">{step.label}</span>
            </div>
            <p className="traceability-desc">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="system-integrity-bar">
        <div className="system-integrity-label">
          <span style={{ color: accentColor }}>■</span> SYSTEM INTEGRITY
        </div>
        <div className="system-integrity-track">
          <div
            className="system-integrity-fill"
            style={{ width: "100%", backgroundColor: accentColor }}
          />
        </div>
        <span className="system-integrity-value">100%</span>
      </div>
    </div>
  );
}
