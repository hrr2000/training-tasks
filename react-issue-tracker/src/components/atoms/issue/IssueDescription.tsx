interface IssueDescriptionProps {
  description: string;
}

export default function IssueDescription({ description }: IssueDescriptionProps) {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}
