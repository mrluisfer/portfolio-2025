import { Slot } from '@radix-ui/react-slot';
import { type ReactNode } from 'react';

const Title = ({ children, asChild }: { children: ReactNode; asChild?: boolean }) => {
  const Component = asChild ? Slot : 'div';

  return (
    <Component className="relative mx-auto flex max-w-[700px] justify-center text-center text-2xl md:text-3xl font-semibold">
      {children}
    </Component>
  );
};

export default Title;
