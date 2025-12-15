import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";

async function buildAll() {
  console.log("Building Next.js application...");
  execSync("npx next build", { stdio: "inherit" });
  
  console.log("Creating production entry point...");
  mkdirSync("dist", { recursive: true });
  
  const entryPoint = `
const { spawn, spawnSync } = require('child_process');
const http = require('http');

const PORT = process.env.PORT || 5000;
const NEST_PORT = 3001;

console.log('[Production] Starting CV Intelligence Parser on port ' + PORT);

// Start NestJS backend first
console.log('[Production] Starting NestJS backend on port ' + NEST_PORT);
const nestProcess = spawn('npx', ['tsx', '--tsconfig', 'nest/tsconfig.json', 'nest/start.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'production' }
});

// Wait for NestJS to be ready
function waitForNest(retries = 30) {
  return new Promise((resolve, reject) => {
    const check = () => {
      const req = http.request({ host: '127.0.0.1', port: NEST_PORT, path: '/api/cv/list', timeout: 1000 }, (res) => {
        resolve(true);
      });
      req.on('error', () => {
        if (retries > 0) {
          setTimeout(() => {
            retries--;
            check();
          }, 500);
        } else {
          reject(new Error('NestJS failed to start'));
        }
      });
      req.end();
    };
    check();
  });
}

waitForNest().then(() => {
  console.log('[Production] NestJS ready, starting Next.js on port ' + PORT);
  
  // Start Next.js frontend
  const nextProcess = spawn('npx', ['next', 'start', '-p', PORT.toString(), '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'production' }
  });

  nextProcess.on('close', (code) => {
    nestProcess.kill();
    process.exit(code || 0);
  });

  process.on('SIGINT', () => {
    nestProcess.kill();
    nextProcess.kill();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    nestProcess.kill();
    nextProcess.kill();
    process.exit(0);
  });
}).catch((err) => {
  console.error('[Production] Failed to start:', err);
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
