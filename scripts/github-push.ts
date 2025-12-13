/**
 * GitHub Push Script
 * Creates repository and pushes code using Replit GitHub integration
 */

import { Octokit } from '@octokit/rest';
import { execSync } from 'child_process';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function main() {
  console.log('Getting GitHub access token...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  const { data: user } = await octokit.users.getAuthenticated();
  console.log(`Authenticated as: ${user.login}`);
  
  const repoName = 'Replit-CV-Parser';
  let repoUrl = '';
  
  try {
    const { data: repo } = await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'CV Intelligence Parser - AI-powered CV/Resume parsing, assessment, and job matching',
      private: false,
      auto_init: false
    });
    console.log(`Repository created: ${repo.html_url}`);
    repoUrl = repo.clone_url;
  } catch (error: any) {
    if (error.status === 422) {
      console.log('Repository already exists, using existing...');
      const { data: repo } = await octokit.repos.get({
        owner: user.login,
        repo: repoName
      });
      console.log(`Repository exists: ${repo.html_url}`);
      repoUrl = repo.clone_url;
    } else {
      throw error;
    }
  }

  const authUrl = repoUrl.replace('https://', `https://${accessToken}@`);
  
  try {
    execSync('git remote remove origin 2>/dev/null || true', { stdio: 'inherit' });
  } catch {}
  
  console.log('Adding GitHub remote...');
  execSync(`git remote add origin ${authUrl}`, { stdio: 'inherit' });
  
  console.log('Pushing to GitHub...');
  execSync('git push -u origin main --force', { stdio: 'inherit' });
  
  console.log(`\nSuccess! Repository available at: https://github.com/${user.login}/${repoName}`);
}

main().catch(console.error);
