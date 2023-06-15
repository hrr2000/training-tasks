import { ReactNode } from 'react';

interface DividedLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export default function DividedLayout({ left, right }: DividedLayoutProps) {
  return (
    <div className="flex mx-auto border-x-2">
      <div className="w-3/12 border-r-2 max-w-md">{left}</div>
      <div className="w-full">{right}</div>
    </div>
  );
}
