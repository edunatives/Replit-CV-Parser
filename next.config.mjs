/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pdf-parse', 'mammoth'],
  // API proxying is handled by Express server (server/index.ts) with 120s timeout
  // to support long-running AI assessment requests (7-45 seconds)
  // Do NOT add rewrites here - they have a ~30s timeout that breaks AI features
};

export default nextConfig;
