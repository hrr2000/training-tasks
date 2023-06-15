import { Comment } from '../../../types';
import CommentBlock from '../comment/CommentBlock';
import CommentSkeletonLoader from '../../loaders/CommentSkeletonLoader';

interface IssueCommentsBlockProps {
  comments: Comment[] | undefined;
}

export default function IssueCommentsBlock({ comments }: IssueCommentsBlockProps) {
  return (
    <div className="text-left px-5">
      <h3 className="text-3xl font-medium my-10 ml-2">Comments ({comments?.length || 0})</h3>
      {comments ? (
        comments?.map((comment) => {
          console.log(comments);
          return (
            <div key={comment.id}>
              {comment.notes.map((comment: any, idx: number) => {
                return (
                  <CommentBlock
                    className={`${idx > 0 ? 'ml-10' : ''}`}
                    key={comment.id}
                    comment={comment}
                  />
                );
              })}
            </div>
          );
        })
      ) : (
        <>
          <CommentSkeletonLoader />
          <CommentSkeletonLoader />
          <CommentSkeletonLoader />
        </>
      )}
    </div>
  );
}
