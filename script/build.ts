import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";

async function buildAll() {
  console.log("Building Next.js application...");
  execSync("npx next build", { stdio: "inherit" });
  
  console.log("Creating production entry point...");
  mkdirSync("dist", { recursive: true });
  
  // Production uses the same Express server as development (server/index.ts)
  // This ensures the 120s proxy timeout is applied in both environments
  // Fixing the "non-JSON response" error caused by Next.js rewrites ~30s timeout
  const entryPoint = `
const { spawn } = require('child_process');

const PORT = process.env.PORT || 5000;
console.log('[Production] Starting unified server on port ' + PORT);
console.log('[Production] Using Express server with 120s proxy timeout for AI requests');

// Use the same server/index.ts as development - it handles:
// 1. Starting NestJS backend
// 2. Starting Next.js with proper configuration
// 3. Proxying /api/* with 120s timeout (required for AI assessment)
const serverProcess = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'production', PORT: PORT.toString() }
});

const cleanup = () => { 
  serverProcess.kill(); 
  process.exit(0); 
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
serverProcess.on('close', (code) => { 
  process.exit(code || 0); 
});
`;
  
  writeFileSync("dist/index.cjs", entryPoint.trim());
  console.log("Build complete!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
