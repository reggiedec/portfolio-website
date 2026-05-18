/**
 * Tiny pixel-art icon library, rendered as inline SVG.
 *
 * Each icon is authored as an array of strings where:
 *   X = filled pixel
 *   . or space = empty pixel
 *
 * SVG uses shape-rendering="crispEdges" so pixels stay sharp at any size.
 */

type IconRows = string[];

const ICONS: Record<string, IconRows> = {
  // Section icons
  controller: [
    "..XXX..",
    "..XXX..",
    "XXXXXXX",
    "XX...XX",
    "XXXXXXX",
    "..XXX..",
    "..XXX..",
  ],
  floppy: [
    "XXXXXXX",
    "X.....X",
    "X.....X",
    "XXXXXXX",
    "X.....X",
    "X.XXX.X",
    "X.XXX.X",
    "XXXXXXX",
  ],
  speech: [
    "XXXXXXX",
    "X.....X",
    "X.....X",
    "X.....X",
    "XXXXXXX",
    ".X.....",
    "X......",
  ],

  // Project-specific icons
  wrench: [
    "XX.....",
    "XXX....",
    ".XXX...",
    "..XXX..",
    "...XXX.",
    "....XXX",
    "....XXX",
  ],
  cross: [
    "..XXX..",
    "..XXX..",
    "XXXXXXX",
    "XXXXXXX",
    "XXXXXXX",
    "..XXX..",
    "..XXX..",
  ],
  vr: [
    ".XXXXXXX.",
    "X.......X",
    "X.X...X.X",
    "X.X...X.X",
    "X.......X",
    ".XXXXXXX.",
  ],
  bag: [
    ".X...X.",
    ".X...X.",
    "XXXXXXX",
    "X..X..X",
    "X.....X",
    "X..X..X",
    "XXXXXXX",
  ],
  brain: [
    ".XX.XX.",
    "XXXXXXX",
    "X.XXX.X",
    "XX.X.XX",
    "X.XXX.X",
    "XXXXXXX",
    ".X.X.X.",
  ],
  leaf: [
    ".....XX",
    "....XXX",
    "...XXXX",
    "..XXXX.",
    ".XXXX..",
    ".XXX...",
    ".XX....",
  ],

  // Accent / decorative
  heart: [
    ".XX.XX.",
    "XXXXXXX",
    "XXXXXXX",
    ".XXXXX.",
    "..XXX..",
    "...X...",
  ],
  star: [
    "...X...",
    "..XXX..",
    "XXXXXXX",
    ".XXXXX.",
    ".XX.XX.",
    ".X...X.",
  ],
  diamond: [
    "...X...",
    "..XXX..",
    ".XXXXX.",
    "XXXXXXX",
    ".XXXXX.",
    "..XXX..",
    "...X...",
  ],
  arrow: [
    "X..",
    "XX.",
    "XXX",
    "XXX",
    "XX.",
    "X..",
  ],
  triangle: [
    "X..",
    "XX.",
    "XXX",
    "XX.",
    "X..",
  ],
  hex: [
    "..XXX..",
    ".XXXXX.",
    "XXXXXXX",
    "XXXXXXX",
    ".XXXXX.",
    "..XXX..",
  ],
  caret: ["X", "X"],
};

export type IconName = keyof typeof ICONS;

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export function PixelIcon({
  name,
  size = 12,
  color = "currentColor",
  className,
  ariaLabel,
}: Props) {
  const rows = ICONS[name];
  if (!rows) return null;
  const h = rows.length;
  const w = rows[0]?.length ?? 0;
  const rects: React.ReactNode[] = [];

  rows.forEach((row, y) => {
    [...row].forEach((c, x) => {
      if (c !== "." && c !== " ") {
        rects.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />
        );
      }
    });
  });

  // keep aspect ratio: width scaled by ratio to height
  const scale = size / h;
  const renderedWidth = Math.round(w * scale);
  const renderedHeight = Math.round(h * scale);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={renderedWidth}
      height={renderedHeight}
      shapeRendering="crispEdges"
      fill={color}
      className={className}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {rects}
    </svg>
  );
}
