import fs from 'fs';
import path from 'path';

const LOGS_DIR = path.join(process.cwd(), 'logs');

if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

function getTimestamp(): string {
  return new Date().toISOString();
}

function getLogFilePath(type: 'server' | 'api' | 'error'): string {
  const date = new Date().toISOString().split('T')[0];
  return path.join(LOGS_DIR, `${type}-${date}.log`);
}

function writeLog(type: 'server' | 'api' | 'error', message: string): void {
  const logPath = getLogFilePath(type);
  const logEntry = `[${getTimestamp()}] ${message}\n`;
  
  fs.appendFileSync(logPath, logEntry);
  
  if (type === 'error') {
    console.error(message);
  } else {
    console.log(message);
  }
}

export const logger = {
  server: (message: string) => writeLog('server', `[Server] ${message}`),
  api: (message: string) => writeLog('api', `[API] ${message}`),
  error: (message: string) => writeLog('error', `[Error] ${message}`),
  proxy: (message: string) => writeLog('api', `[Proxy] ${message}`),
  express: (message: string) => writeLog('api', `[Express] ${message}`),
};
