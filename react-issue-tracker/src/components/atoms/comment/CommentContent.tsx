import CustomMarkDown from '../CustomMarkDown';

interface CommentContentProps {
  content: string;
}

export default function CommentContent({ content }: CommentContentProps) {
  return (
    <div>
      <p className="text-md text-gray-500">
        <CustomMarkDown content={content} />
      </p>
    </div>
  );
}
