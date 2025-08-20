import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className={'flex h-screen flex-col items-center justify-center'}>
        <Card>
          <CardHeader>
            <CardTitle>404 - Page Not Found</CardTitle>
            <CardDescription>The page you are looking for does not exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={'text-center leading-relaxed'}>
              Sorry, the page you are looking for does not exist. Please check the URL or return to
              the homepage.
            </p>
            <div className={'mt-4 flex items-center justify-start gap-8'}>
              <Button asChild>
                <Link href="/">
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild={true} variant={'outline'}>
                <Link href={'https://github.com/mrluisfer'} target={'_blank'} rel={'noreferrer'}>
                  <GithubIcon className="mr-2 h-4 w-4" />
                  More projects on my Github
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </body>
    </html>
  );
}
