import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { spawn, ChildProcess } from 'child_process';
import next from 'next';

const PORT = 5000;
const NEST_PORT = 3001;
const isDev = process.env.NODE_ENV !== 'production';

console.log('[Server] Starting CV Intelligence Parser...');
console.log('[Server] Mode:', isDev ? 'development' : 'production');

async function startServer() {
  // Start NestJS backend
  console.log('[Server] Starting NestJS backend on port', NEST_PORT);
  const nestProcess: ChildProcess = spawn('npx', ['tsx', '--tsconfig', 'nest/tsconfig.json', 'nest/start.ts'], {
    stdio: 'inherit',
    shell: true
  });

  // Wait for NestJS to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Initialize Next.js
  console.log('[Server] Initializing Next.js...');
  const nextApp = next({ dev: isDev, hostname: '0.0.0.0', port: PORT });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  // Create Express server
  const app = express();

  // Proxy /api/* requests to NestJS backend (keep the full path)
  app.use('/api', createProxyMiddleware({
    target: `http://localhost:${NEST_PORT}/api`,
    changeOrigin: true,
  }));

  // Handle all other requests with Next.js
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start Express server
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Running on http://0.0.0.0:${PORT}`);
    console.log(`[Server] API proxy: /api/* -> http://localhost:${NEST_PORT}/api/*`);
  });

  // Cleanup handler
  const cleanup = () => {
    console.log('[Server] Shutting down...');
    nestProcess.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  nestProcess.on('close', (code) => {
    if (code !== 0) console.error(`[Server] NestJS exited with code ${code}`);
  });
}

startServer().catch(err => {
  console.error('[Server] Failed to start:', err);
  process.exit(1);
});
