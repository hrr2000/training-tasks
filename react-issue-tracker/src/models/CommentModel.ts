import GitlabService from '../services/GitlabService';
import { Comment } from '../types';

const service = new GitlabService();

class CommentModel {
  static all = async (issueId: string | null = null): Promise<Comment[]> => {
    if (!issueId) return [];
    return await service.fetchDiscussions(parseInt(issueId));
  };
}

export default CommentModel;
