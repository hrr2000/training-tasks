import BackButton from '../../atoms/BackButton';
import IssueTitle from '../../atoms/issue/IssueTitle';
import IssueStatus from '../../atoms/issue/IssueStatus';
import { Issue } from '../../../types';

interface IssueHeaderProps {
  issue: Issue;
}

export default function IssueHeader({ issue }: IssueHeaderProps) {
  return (
    <div className="py-5 px-5 flex gap-2 justify-start items-center">
      <BackButton />
      <IssueTitle title={issue.title} className="text-black font-bold text-md" />
      <IssueStatus state={issue.state} />
    </div>
  );
}
