import IssueListItem from '../molecules/issue/IssueListItem';
import { Issue } from '../../types';
import { NavLink } from 'react-router-dom';
import ListSkeletonLoader from '../loaders/ListSkeletonLoader';

interface IssueListProps {
  issues: Issue[] | undefined;
}

export default function IssueList({ issues }: IssueListProps) {
  return (
    <div className="">
      {issues ? (
        issues?.map((issue) => {
          return (
            <NavLink key={issue.id} to={{ pathname: `/issues/${issue.iid}` }}>
              <IssueListItem issue={issue} />
            </NavLink>
          );
        })
      ) : (
        <ListSkeletonLoader />
      )}
    </div>
  );
}
