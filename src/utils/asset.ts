/**
 * Resolves asset paths for GitHub Pages (base path) and local dev.
 * Use for videos, models, and other public folder assets.
 */
const base = import.meta.env.BASE_URL;

export function asset(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}
