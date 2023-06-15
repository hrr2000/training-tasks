import { Label } from '../../types';

interface BadgeLabelProps {
  label: Label;
}

export default function BadgeLabel({ label }: BadgeLabelProps) {
  return (
    <span
      className="rounded-md text-xs px-2 py-1 font-thin inline-block duration-500 hover:opacity-70 cursor-default"
      style={{ backgroundColor: label.color, color: label.text_color }}>
      {label.name}
    </span>
  );
}
