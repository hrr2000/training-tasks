import { Issue } from '../../../types';
import IssueTitle from '../../atoms/issue/IssueTitle';
import BadgeLabelList from '../BadgeLabelList';

interface IssueListItemProps {
  issue: Issue;
}

export default function IssueListItem({ issue }: IssueListItemProps) {
  return (
    <div className="text-left py-4 border-b-2 px-5 w-full">
      <IssueTitle title={issue.title} />
      <BadgeLabelList labels={issue.labels} />
    </div>
  );
}
