import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GITLAB } from '../../utils/constants';

const items: number[] = [];
for (let i = 0; i < GITLAB.ISSUES_PER_PAGE; i++) {
  items.push(i);
}

export default function ListSkeletonLoader() {
  return (
    <div>
      {items.map((item, idx) => {
        return (
          <div key={`list-skeleton-loader-${idx}`} className="p-4 border-b-2">
            <Skeleton />
          </div>
        );
      })}
    </div>
  );
}
