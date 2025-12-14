import { spawn } from 'child_process';

const isDev = process.env.NODE_ENV !== 'production';

console.log('[Server] Starting CV Intelligence Parser...');
console.log('[Server] Mode:', isDev ? 'development' : 'production');

if (isDev) {
  console.log('[Server] Starting NestJS backend on port 3001...');
  const nest = spawn('npx', ['tsx', '--tsconfig', 'nest/tsconfig.json', 'nest/start.ts'], {
    stdio: 'inherit',
    shell: true
  });

  console.log('[Server] Starting Next.js frontend on port 5000...');
  const next = spawn('npx', ['next', 'dev', '-p', '5000', '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true
  });

  const cleanup = () => {
    console.log('[Server] Shutting down...');
    nest.kill();
    next.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  nest.on('close', (code) => {
    if (code !== 0) console.error(`[Server] NestJS exited with code ${code}`);
  });

  next.on('close', (code) => {
    cleanup();
  });
} else {
  console.log('[Server] Starting NestJS backend on port 3001...');
  const nest = spawn('npx', ['tsx', '--tsconfig', 'nest/tsconfig.json', 'nest/start.ts'], {
    stdio: 'inherit',
    shell: true
  });

  console.log('[Server] Starting Next.js production server on port 5000...');
  const next = spawn('npx', ['next', 'start', '-p', '5000', '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true
  });

  const cleanup = () => {
    console.log('[Server] Shutting down...');
    nest.kill();
    next.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  nest.on('close', (code) => {
    if (code !== 0) console.error(`[Server] NestJS exited with code ${code}`);
  });

  next.on('close', (code) => {
    cleanup();
  });
}
