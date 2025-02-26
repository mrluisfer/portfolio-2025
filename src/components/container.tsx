import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export default function Container({
  children,
  asChild = false,
  align = 'center',
}: { children: ReactNode; asChild?: boolean; align?: 'center' | 'left' | 'right' }) {
  const Component = asChild ? Slot : 'div';
  const aligns = {
    center: 'mx-auto',
    left: 'ml-auto',
    right: 'mr-auto',
  };
  const alignClassName = aligns[align];

  return <Component className={`max-w-5xl ${alignClassName}`}>{children}</Component>;
}
