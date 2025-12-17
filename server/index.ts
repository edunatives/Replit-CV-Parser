import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { spawn, ChildProcess } from 'child_process';
import next from 'next';
import { logger } from './logger';

const PORT = 5000;
const NEST_PORT = 3001;
const isDev = process.env.NODE_ENV !== 'production';

logger.server('Starting CV Intelligence Parser...');
logger.server(`Mode: ${isDev ? 'development' : 'production'}`);

async function startServer() {
  logger.server(`Starting NestJS backend on port ${NEST_PORT}`);
  const nestProcess: ChildProcess = spawn('npx', ['tsx', '--tsconfig', 'nest/tsconfig.json', 'nest/start.ts'], {
    stdio: 'inherit',
    shell: true
  });

  await new Promise(resolve => setTimeout(resolve, 3000));

  logger.server('Initializing Next.js...');
  const nextApp = next({ dev: isDev, hostname: '0.0.0.0', port: PORT });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  const app = express();

  app.use((req, res, next) => {
    logger.express(`${req.method} ${req.url}`);
    next();
  });

  app.use('/api', createProxyMiddleware({
    target: `http://localhost:${NEST_PORT}`,
    changeOrigin: true,
    timeout: 120000,
    proxyTimeout: 120000,
    on: {
      proxyReq: (proxyReq, req) => {
        logger.proxy(`Forwarding: ${req.method} ${req.url} -> ${NEST_PORT}`);
      },
      proxyRes: (proxyRes, req) => {
        logger.proxy(`Response: ${req.method} ${req.url} -> ${proxyRes.statusCode}`);
      },
      error: (err, req, res) => {
        logger.error(`Proxy error: ${err.message}`);
        if ('writeHead' in res) {
          (res as any).writeHead(502, { 'Content-Type': 'application/json' });
          (res as any).end(JSON.stringify({ error: 'Backend unavailable' }));
        }
      }
    }
  }));

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, '0.0.0.0', () => {
    logger.server(`Running on http://0.0.0.0:${PORT}`);
    logger.server(`API proxy: /api/* -> http://localhost:${NEST_PORT}/*`);
  });

  const cleanup = () => {
    logger.server('Shutting down...');
    nestProcess.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  nestProcess.on('close', (code) => {
    if (code !== 0) logger.error(`NestJS exited with code ${code}`);
  });
}

startServer().catch(err => {
  logger.error(`Failed to start: ${err}`);
  process.exit(1);
});
