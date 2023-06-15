import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function CommentSkeletonLoader({ className }: { className?: string }) {
  return (
    <div className={`${className || ''} flex items-start gap-2 my-12 w-full`}>
      <div style={{ width: '40px', height: '40px' }}>
        <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <Skeleton width={70} />
          <Skeleton width={70} />
        </div>
        <Skeleton count={3} width="100%" />
      </div>
    </div>
  );
}
