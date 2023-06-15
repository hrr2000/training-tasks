import React from 'react';

interface AppTitleProps {
  title: string;
}

export default function AppTitle({ title }: AppTitleProps) {
  return <h4 className="text-left">{title}</h4>;
}
