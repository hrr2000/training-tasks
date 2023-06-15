import BadgeLabel from '../atoms/BadgeLabel';
import { Label } from '../../types';

interface BadgeLabelListProps {
  labels: Label[];
}

export default function BadgeLabelList({ labels }: BadgeLabelListProps) {
  return (
    <div className="flex flex-wrap gap-2 py-1">
      {labels.map((label) => {
        return <BadgeLabel key={label.id} label={label} />;
      })}
    </div>
  );
}
