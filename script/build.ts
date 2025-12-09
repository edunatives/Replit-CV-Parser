import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";

async function buildAll() {
  console.log("Building Next.js application...");
  execSync("npx next build", { stdio: "inherit" });
  
  console.log("Creating production entry point...");
  mkdirSync("dist", { recursive: true });
  
  const entryPoint = `
const { spawn } = require('child_process');
const next = spawn('npx', ['next', 'start', '-p', '5000', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true
});
next.on('close', (code) => process.exit(code || 0));
`;
  
  writeFileSync("dist/index.cjs", entryPoint.trim());
  console.log("Build complete!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
