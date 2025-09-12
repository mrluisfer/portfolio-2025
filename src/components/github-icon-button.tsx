'use client';
import { GitHub, GithubDark } from '@/assets/icons/allIcons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from './ui/button';

export default function GithubIconButton({ url }: { url: string }) {
  const { theme } = useTheme();

  return (
    <Button size={'icon'} asChild>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {theme === 'light' ? <GitHub /> : <GithubDark />}
      </Link>
    </Button>
  );
}
