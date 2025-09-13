import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/pravah-waitlist" : undefined,
  assetPrefix: isProd ? "/pravah-waitlist" : undefined,
};

export default nextConfig;
