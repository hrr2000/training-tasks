import { ReactNode } from 'react';

interface MonoLayoutProps {
  isLeft: boolean;
  left: ReactNode;
  right: ReactNode;
}

export default function MonoLayout({ isLeft, left, right }: MonoLayoutProps) {
  return <div>{isLeft ? <div>{left}</div> : <div>{right}</div>}</div>;
}
