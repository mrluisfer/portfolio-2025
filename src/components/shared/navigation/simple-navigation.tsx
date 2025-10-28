import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export function SimpleNavigation({
  className,
  backUrl = '/',
}: {
  className?: string;
  backUrl?: string;
}) {
  return (
    <Link href={backUrl}>
      <nav
        className={cn(
          "'border-white/10 text-gray-100' fixed right-4 bottom-4 z-50 flex items-center justify-center rounded-full border border-white/20 bg-black/60 px-2 py-1 shadow-lg backdrop-blur-md backdrop-saturate-150 transition-all hover:scale-95 hover:bg-black/30 hover:shadow-xl hover:backdrop-blur-xl active:scale-90 md:right-8 md:left-auto",
          className
        )}
      >
        <Button
          variant="link"
          size="sm"
          className="flex items-center gap-2 text-white hover:bg-transparent hover:text-white/80"
          asChild
        >
          <span>
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="font-medium">Back</span>
          </span>
        </Button>
      </nav>
    </Link>
  );
}
