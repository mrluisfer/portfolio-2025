import { octokit } from '@/lib/octokit';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    // https://api.github.com/users/mrluisfer/repos
    const response = await octokit.request('GET /user/repos', {
      sort: 'updated',
    });

    return new Response(JSON.stringify(response.data.slice(0, 9)), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching GitHub user repos:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch user repos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
