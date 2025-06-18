import { octokit } from '@/lib/octokit';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const response = await octokit.request('GET /users/{username}/starred', {
      username: 'mrluisfer',
    });

    const repositoriesFiltered = response.data.filter((repo: any) => {
      return repo.owner.login === 'mrluisfer' || repo.owner.full_name?.includes('mrluisfer');
    });
    console.log({ repositoriesFiltered });
    console.log(repositoriesFiltered.length);

    return new Response(JSON.stringify(repositoriesFiltered), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching GitHub user starred:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch user starred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
