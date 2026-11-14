/**
 * Static export config.
 *
 * `output: "export"` turns this Next.js app into plain HTML/CSS/JS inside `out/`,
 * which is what makes it deployable on GitHub Pages, Netlify, Cloudflare Pages, etc.
 *
 * For a GitHub Pages *project* site (https://user.github.io/repo-name/) you must
 * build with a base path so assets resolve correctly:
 *
 *   NEXT_PUBLIC_BASE_PATH=/repo-name npm run build
 *
 * The deploy workflow in .github/workflows/deploy.yml does this for you automatically.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
