const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Prefix a public asset path with the configured base path.
 * Needed because `next/image` optimisation is off (static export) and we use
 * plain <img> tags, which Next does not rewrite automatically.
 *
 * @param {string} path e.g. "/images/portrait.jpg"
 * @returns {string}
 */
export function asset(path) {
  if (!path) return '';
  return `${basePath}${path}`;
}
