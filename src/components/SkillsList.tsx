import { skillGroups } from "../data/experience";

/** Plain read-only skill groups — no per-item hover or highlight tiers. */
export function SkillsList() {
  return (
    <dl className="skills">
      {skillGroups.map((g) => (
        <div key={g.label} className="skills-row">
          <dt className="skills-key">{g.label}</dt>
          <dd className="skills-val">{g.items.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}
