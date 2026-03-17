import type { NextConfig } from "next";

// Standalone creates symlinks; on Windows this requires Administrator or Developer Mode.
// Skip standalone on Windows so `next build` works; use it in CI/Docker (Linux) for deployment.
const isWindows = process.platform === "win32";
const useStandalone =
  process.env.NODE_ENV === "production" &&
  (process.env.USE_STANDALONE === "1" || !isWindows);

const nextConfig: NextConfig = {
  ...(useStandalone ? { output: "standalone" } : {}),
};

export default nextConfig;
