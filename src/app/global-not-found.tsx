import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NotFoundComponent } from './_components/not-found';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFoundPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <html lang="en" className={inter.className}>
        <body>
          <NotFoundComponent />
        </body>
      </html>
    </ThemeProvider>
  );
}
