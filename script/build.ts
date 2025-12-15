import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";

async function buildAll() {
  console.log("Building Next.js application...");
  execSync("npx next build", { stdio: "inherit" });
  
  console.log("Creating production entry point...");
  mkdirSync("dist", { recursive: true });
  
  const entryPoint = `
const { spawn } = require('child_process');
const http = require('http');

const PORT = process.env.PORT || 5000;
const NEST_PORT = 3001;

console.log('[Production] Starting on port ' + PORT);

const nestProcess = spawn('npx', ['tsx', '--tsconfig', 'nest/tsconfig.json', 'nest/start.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'production' }
});

function waitForNest(maxWait = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      if (Date.now() - start > maxWait) {
        return reject(new Error('NestJS timeout'));
      }
      const req = http.request({ host: '127.0.0.1', port: NEST_PORT, path: '/api/cv/list', timeout: 500 }, () => resolve(true));
      req.on('error', () => setTimeout(check, 300));
      req.end();
    };
    check();
  });
}

waitForNest().then(() => {
  console.log('[Production] Starting Next.js');
  const nextProcess = spawn('npx', ['next', 'start', '-p', PORT.toString(), '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  const cleanup = () => { nestProcess.kill(); nextProcess.kill(); process.exit(0); };
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  nextProcess.on('close', (code) => { nestProcess.kill(); process.exit(code || 0); });
}).catch((err) => {
  console.error('[Production] Failed:', err.message);
  nestProcess.kill();
  process.exit(1);
});
`;
  
  writeFileSync("dist/index.cjs", entryPoint.trim());
  console.log("Build complete!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
