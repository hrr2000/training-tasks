interface IssueTitleProps {
  title: string;
  className?: string;
}

export default function IssueTitle({ title, className }: IssueTitleProps) {
  return <h4 className={`text-sm font-medium text-gray-500 ${className || ''}`}>{title}</h4>;
}
