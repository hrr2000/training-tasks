import { useState } from 'react';
import { Comment, Issue } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import CommentModel from '../models/CommentModel';

function HomeViewModel(issues: Issue[] = []) {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue>();
  const [comments, setComments] = useState<Comment[]>();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const loadIssue = (): void => {
    if (!id) return setIssue(undefined);
    setComments(undefined);
    const result = issues.filter((issue) => issue.iid == id);
    setIssue(result.length ? result[0] : issue);
  };

  const goBack = () => {
    navigate(-1);
  };

  const trackWindowEffect = () => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  };

  const loadComments = async () => {
    setComments(await CommentModel.all(id));
  };

  return {
    id,
    issue,
    windowWidth,
    comments,
    loadIssue,
    goBack,
    trackWindowEffect,
    loadComments
  };
}

export default HomeViewModel;
