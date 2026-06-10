import { useEffect, useState } from "react";

/**
 * Tiny visit counter, no backend required. Hits the free abacus.jasoncameron.dev
 * API which atomically increments a counter on every request.
 *
 *   GET /hit/:namespace/:key  -> { value: number }
 *
 * We only increment once per browser session (sessionStorage flag), and we
 * fall back gracefully to the last cached value if the API is unreachable.
 */
const NAMESPACE = "regine-decossard-portfolio";
const KEY = "site-visits";
const ENDPOINT_HIT = `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;
const ENDPOINT_GET = `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`;
const CACHE_KEY = `${NAMESPACE}__count`;
const SESSION_KEY = `${NAMESPACE}__hit-this-session`;

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(() => {
    if (typeof window === "undefined") return null;
    const cached = window.localStorage.getItem(CACHE_KEY);
    return cached ? Number(cached) : null;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyHit = window.sessionStorage.getItem(SESSION_KEY);
    const url = alreadyHit ? ENDPOINT_GET : ENDPOINT_HIT;

    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((data: { value: number }) => {
        if (typeof data?.value !== "number") return;
        setCount(data.value);
        window.localStorage.setItem(CACHE_KEY, String(data.value));
        window.sessionStorage.setItem(SESSION_KEY, "1");
      })
      .catch(() => {
        // network failure / sandbox · silently leave the cached value alone
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="hud-bar hud-bar-thin hud-visits">
      <span className="hud-label">VST</span>
      <span className="hud-value hud-visits-value">
        {count === null ? "…" : count.toLocaleString("en-US")}
      </span>
    </div>
  );
}
