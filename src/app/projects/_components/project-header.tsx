import { Button } from '@/components/ui/button';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { MoonIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
``;
const navigationItems = Object.values(NAVIGATION_NAMES);
export default function ProjectHeader() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-5 sm:px-10">
      <nav className="flex items-center gap-4 text-sm text-neutral-600">
        <Button variant="ghost">
          <Link className="font-medium text-neutral-900 uppercase" href="/">
            / mrluisfer
          </Link>
        </Button>
        {navigationItems.map((item) => (
          <Button key={item} asChild variant={'outline'} size={'sm'}>
            <Link href={`/#${item.toLowerCase()}`} className="capitalize hover:text-neutral-900">
              {item}
            </Link>
          </Button>
        ))}
      </nav>
      <Button
        className="rounded-full"
        aria-label="Toggle theme (placeholder)"
        title="Toggle theme (placeholder)"
        size="icon"
        disabled
      >
        <MoonIcon size={16} />
      </Button>
    </header>
  );
}
