import { spawn } from 'child_process';

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  const next = spawn('npx', ['next', 'dev', '-p', '5000', '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true
  });

  next.on('close', (code) => {
    process.exit(code || 0);
  });
} else {
  const next = spawn('npx', ['next', 'start', '-p', '5000', '-H', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true
  });

  next.on('close', (code) => {
    process.exit(code || 0);
  });
}
