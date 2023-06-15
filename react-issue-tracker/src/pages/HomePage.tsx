import DividedLayout from '../components/templates/DividedLayout';
import IssueList from '../components/organisms/IssueList';
import IssueDetail from '../components/organisms/IssueDetail';
import HomeViewModel from '../viewmodels/HomeViewModel';
import { Issue } from '../types';
import { useEffect } from 'react';
import MonoLayout from '../components/templates/MonoLayout';

interface HomePageProps {
  issues: Issue[] | undefined;
}

export default function HomePage({ issues }: HomePageProps) {
  const { id, issue, windowWidth, comments, loadIssue, trackWindowEffect, loadComments } =
    HomeViewModel(issues);

  useEffect(() => {
    loadIssue();
    loadComments().catch(console.error);
  }, [issues, id]);
  useEffect(trackWindowEffect, []);

  return windowWidth <= 1024 ? (
    <MonoLayout
      isLeft={!id}
      left={<IssueList issues={issues} />}
      right={<IssueDetail issue={issue} comments={comments} />}
    />
  ) : (
    <DividedLayout
      left={<IssueList issues={issues} />}
      right={<IssueDetail issue={issue} comments={comments} />}
    />
  );
}
