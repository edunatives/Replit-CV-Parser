/**
 * GitHub Upload Script - Uses API to push files directly
 */

import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings?.settings?.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    { headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken } }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!accessToken) throw new Error('GitHub not connected');
  return accessToken;
}

function getAllFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const ignorePatterns = [
    'node_modules', '.git', '.next', '.cache', 'dist', 'build',
    '.local', '.replit', 'replit.nix', '.upm', '.config',
    'attached_assets', 'scripts/github-upload.ts', 'scripts/github-push.ts'
  ];
  
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (ignorePatterns.some(p => relativePath.startsWith(p) || item.startsWith('.'))) continue;
    
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else if (stat.size < 1000000) { // Skip files > 1MB
      files.push(relativePath);
    }
  }
  return files;
}

async function main() {
  console.log('Getting GitHub access token...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  const owner = 'edunatives';
  const repo = 'Replit-CV-Parser';
  
  console.log(`Uploading to ${owner}/${repo}...`);
  
  // First, initialize repo with a README if empty
  console.log('Initializing repository...');
  try {
    await octokit.repos.getContent({ owner, repo, path: 'README.md' });
    console.log('Repository already has content');
  } catch (e: any) {
    if (e.status === 404) {
      console.log('Creating initial README...');
      const readmeContent = Buffer.from('# CV Intelligence Parser\n\nAI-powered CV/Resume parsing, assessment, and job matching.\n').toString('base64');
      await octokit.repos.createOrUpdateFileContents({
        owner, repo, path: 'README.md',
        message: 'Initial commit',
        content: readmeContent
      });
      console.log('README created');
    }
  }
  
  const baseDir = '/home/runner/workspace';
  const files = getAllFiles(baseDir);
  console.log(`Found ${files.length} files to upload`);
  
  // Upload files one by one using createOrUpdateFileContents
  console.log('Uploading files...');
  let uploaded = 0;
  let failed = 0;
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(baseDir, file));
    const base64Content = content.toString('base64');
    
    try {
      // Check if file exists to get sha for update
      let sha: string | undefined;
      try {
        const { data } = await octokit.repos.getContent({ owner, repo, path: file });
        if (!Array.isArray(data) && 'sha' in data) sha = data.sha;
      } catch {}
      
      await octokit.repos.createOrUpdateFileContents({
        owner, repo, path: file,
        message: `Add ${file}`,
        content: base64Content,
        sha
      });
      uploaded++;
      process.stdout.write('.');
    } catch (e: any) {
      failed++;
      if (failed <= 3) console.log(`\nFailed ${file}: ${e.message}`);
    }
  }
  
  console.log(`\n\nUploaded ${uploaded} files, ${failed} failed`);
  console.log(`Repository: https://github.com/${owner}/${repo}`);
}


main().catch(console.error);
