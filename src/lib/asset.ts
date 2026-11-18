/**
 * Prefixes public asset paths with the Next.js basePath.
 * basePath is set in next.config.ts (e.g. "/SmartPage-Technologies" on GitHub Pages)
 * and exposed to the client as NEXT_PUBLIC_BASE_PATH. Empty locally.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
