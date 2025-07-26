import { Octokit } from '@octokit/core';

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function githubRequest(endpoint: string, params: Record<string, any> = {}) {
  try {
    const response = await octokit.request(endpoint, params);
    return { data: response.data, error: null };
  } catch (error) {
    console.error('GitHub API error:', error);
    return { data: null, error };
  }
}
