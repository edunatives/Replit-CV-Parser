import { spawn, ChildProcess } from 'child_process';

const isDev = process.env.NODE_ENV !== 'production';

let nestProcess: ChildProcess | null = null;

function startNestJS() {
  console.log('[Server] Starting NestJS backend on port 3001...');
  nestProcess = spawn('npx', ['tsx', '--tsconfig', 'nest/tsconfig.json', 'nest/start.ts'], {
    stdio: 'inherit',
    shell: true
  });

  nestProcess.on('error', (err) => {
    console.error('[Server] NestJS failed to start:', err);
  });

  nestProcess.on('close', (code) => {
    if (code !== 0) {
      console.error(`[Server] NestJS exited with code ${code}`);
    }
  });
}

function cleanup() {
  if (nestProcess) {
    console.log('[Server] Stopping NestJS...');
    nestProcess.kill();
  }
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

startNestJS();

if (isDev) {
  const next = spawn('npx', ['next', 'dev', '-p', '5000', '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true
  });

  next.on('close', (code) => {
    cleanup();
    process.exit(code || 0);
  });
} else {
  const next = spawn('npx', ['next', 'start', '-p', '5000', '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true
  });

  next.on('close', (code) => {
    cleanup();
    process.exit(code || 0);
  });
}
