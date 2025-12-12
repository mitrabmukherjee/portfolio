import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ...(process.env.ENV === "PROD" ? { output: "standalone" } : {}),
};

export default nextConfig;
