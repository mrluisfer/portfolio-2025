import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import { ReactNode } from 'react';

export const Route = createRootRoute({
  head: () => ({
    title: 'Portfolio 2025 - mrluisfer',
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Professional portfolio of mrluisfer — frontend and fullstack developer specializing in React, Tailwind, TanStack, and modern technologies.',
      },
      { name: 'author', content: 'Luis Fernando Alvarez' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#ffffff' },

      { property: 'og:title', content: 'Portfolio 2025 - mrluisfer' },
      {
        property: 'og:description',
        content:
          'Explore the latest projects, tech stack, and experience of mrluisfer in modern web development.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://mrluisfer.dev' },
      { property: 'og:image', content: 'https://mrluisfer.dev/og-cover.jpg' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Portfolio 2025 - mrluisfer' },
      {
        name: 'twitter:description',
        content:
          'Frontend and fullstack developer building modern solutions with TanStack, React, and more.',
      },
      { name: 'twitter:image', content: 'https://mrluisfer.dev/og-cover.jpg' },
      { name: 'twitter:creator', content: '@mrluisfeer' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'canonical', href: 'https://mrluisfer.dev' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <div>
          <h1 className="text-2xl font-bold text-red-600">An error occurred</h1>
          <p className="text-gray-700">{props.error.message}</p>
          <p className="text-gray-500">Please try again later.</p>
        </div>
      </RootDocument>
    );
  },
  notFoundComponent: () => (
    <RootDocument>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
      </div>
    </RootDocument>
  ),
  component: RootLayout,
});

const queryClient = new QueryClient();

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootLayout() {
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </RootDocument>
  );
}
