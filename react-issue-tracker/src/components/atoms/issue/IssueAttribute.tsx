interface IssueAttributeProps {
  label: string;
  value: string;
}

export default function IssueAttribute({ label, value }: IssueAttributeProps) {
  return (
    <div className="py-2">
      <span className="font-bold text-gray-500">{label}: </span>
      &nbsp;
      <span>{value}</span>
    </div>
  );
}
