import { Comment, Issue } from '../../types';
import IssueHeader from '../molecules/issue/IssueHeader';
import IssueAttributesBlock from '../molecules/issue/IssueAttributesBlock';
import IssueDescriptionBlock from '../molecules/issue/IssueDescriptionBlock';
import IssueCommentsBlock from '../molecules/issue/IssueCommentsBlock';

interface IssueDetailProps {
  issue?: Issue;
  comments?: Comment[];
}

export default function IssueDetail({ issue, comments }: IssueDetailProps) {
  if (!issue)
    return (
      <div
        className="w-full h-full bg-no-repeat bg-fixed bg-cover"
        style={{ backgroundImage: 'url("https://picsum.photos/1920/1080/?blur")' }}></div>
    );
  return (
    <div className="">
      <IssueHeader issue={issue} />
      <IssueAttributesBlock issue={issue} />
      <hr />
      <IssueDescriptionBlock issue={issue} />
      <hr />
      <IssueCommentsBlock comments={comments} />
    </div>
  );
}
