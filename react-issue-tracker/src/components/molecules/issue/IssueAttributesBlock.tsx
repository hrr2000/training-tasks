import IssueAttribute from '../../atoms/issue/IssueAttribute';
import { Issue } from '../../../types';
import { useMemo } from 'react';
import moment from 'moment';

interface IssueAttributesBlockProps {
  issue: Issue;
}

export default function IssueAttributesBlock({ issue }: IssueAttributesBlockProps) {
  const attributes = useMemo(
    () => [
      { key: 'Opened', value: moment(issue.created_at).fromNow() },
      { key: 'Opened By', value: issue.author?.name },
      { key: 'Assigned To', value: issue.assignee?.name || 'No one' },
      { key: 'Due on', value: 'no due date' }
    ],
    []
  );

  return (
    <div className="w-full flex flex-wrap justify-start text-left px-5 pb-5">
      {attributes?.map((attribute) => {
        return (
          <div key={attribute.key} className="w-1/3">
            <IssueAttribute label={attribute.key} value={attribute.value} />
          </div>
        );
      })}
    </div>
  );
}
