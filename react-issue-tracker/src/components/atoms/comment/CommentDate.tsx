import moment from 'moment';

interface CommentDateProps {
  date: string;
}

export default function CommentDate({ date }: CommentDateProps) {
  return <span className="text-gray-400 text-sm">{moment(date).fromNow()}</span>;
}
