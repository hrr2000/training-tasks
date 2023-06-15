import UserAvatar from '../../atoms/user/UserAvatar';
import UserName from '../../atoms/user/UserName';
import CommentDate from '../../atoms/comment/CommentDate';
import CommentContent from '../../atoms/comment/CommentContent';
// import { Comment } from '../../../types';

interface CommentBlockProps {
  className: string;
  comment: any;
}

export default function CommentBlock({ className, comment }: CommentBlockProps) {
  return (
    <div className={`${className} flex items-start gap-2 my-12`}>
      <div>
        <UserAvatar user={comment.author} />
      </div>
      <div>
        <div className="flex gap-2">
          <UserName name={comment.author.name} />
          <CommentDate date={comment.created_at} />
        </div>
        <CommentContent content={comment.body} />
      </div>
    </div>
  );
}
