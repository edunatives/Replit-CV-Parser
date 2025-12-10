import { spawn } from 'child_process';
import path from 'path';

async function startServers() {
  console.log('Starting NestJS backend...');
  
  const nestProcess = spawn('npx', ['tsx', '--tsconfig', 'tsconfig.json', 'start.ts'], {
    cwd: path.join(process.cwd(), 'nest'),
    stdio: 'inherit',
    shell: true
  });

  nestProcess.on('error', (err) => {
    console.error('Failed to start NestJS:', err);
  });

  // Wait for NestJS to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  console.log('Starting Next.js frontend...');
  
  const nextProcess = spawn('tsx', ['server/index.ts'], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'development' }
  });

  nextProcess.on('error', (err) => {
    console.error('Failed to start Next.js:', err);
  });

  // Handle cleanup
  process.on('SIGINT', () => {
    console.log('Shutting down...');
    nestProcess.kill();
    nextProcess.kill();
    process.exit();
  });

  process.on('SIGTERM', () => {
    console.log('Shutting down...');
    nestProcess.kill();
    nextProcess.kill();
    process.exit();
  });
}

startServers();
