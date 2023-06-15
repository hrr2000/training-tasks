import { useState } from 'react';
import IssueModel from '../models/IssueModel';
import { Issue } from '../types';

function AppViewModel() {
  const [issues, setIssues] = useState<Issue[]>();
  let isLoading = false;

  const loadIssues = async (): Promise<void> => {
    if (isLoading) return;
    isLoading = true;
    setIssues(await IssueModel.opened());
    isLoading = false;
  };

  return {
    issues,
    loadIssues,
    isLoading
  };
}

export default AppViewModel;
