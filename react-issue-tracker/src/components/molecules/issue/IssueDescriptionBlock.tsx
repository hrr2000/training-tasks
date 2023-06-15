import { Issue } from '../../../types';
import BadgeLabelList from '../BadgeLabelList';
import IssueAttribute from '../../atoms/issue/IssueAttribute';
import moment from 'moment';

interface IssueDescriptionBlockProps {
  issue: Issue;
}

export default function IssueDescriptionBlock({ issue }: IssueDescriptionBlockProps) {
  return (
    <div className="text-left px-5 py-5">
      <p className="px-5 text-gray-500">
        {issue.body || '>> There is no description for this issue! <<'}
      </p>
      <IssueAttribute label="Last Modified" value={moment(issue.updated_at).fromNow()} />
      <div className="flex items-center gap-3">
        <span>Filed Under:</span>
        <BadgeLabelList labels={issue.labels} />
      </div>
    </div>
  );
}
