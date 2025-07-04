import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { type ReactNode } from 'react';

export default function Container({
  children,
  asChild = false,
  align = 'center',
  className = '',
}: {
  children: ReactNode;
  asChild?: boolean;
  align?: 'center' | 'left' | 'right';
  className?: string;
}) {
  const Component = asChild ? Slot : 'div';
  const aligns = {
    center: 'mx-auto',
    left: 'ml-auto',
    right: 'mr-auto',
  };
  const alignClassName = aligns[align];

  return <Component className={clsx('max-w-5xl', alignClassName, className)}>{children}</Component>;
}
