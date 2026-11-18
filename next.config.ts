import type { NextConfig } from "next";

/**
 * GitHub Pages project sites are served from /<repo-name>/.
 * GITHUB_ACTIONS and GITHUB_REPOSITORY are set automatically in Actions.
 * Local dev and custom-domain setups keep an empty basePath.
 */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repoName.endsWith(".github.io");
const basePath =
  isGitHubPagesBuild && repoName && !isUserSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
