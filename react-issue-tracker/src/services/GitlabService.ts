import { Gitlab } from '@gitbeaker/browser';
import { GITLAB } from '../utils/constants';
import ServiceWrapper from './ServiceWrapper';

class GitlabService extends ServiceWrapper {
  client: any = {};
  isLoading: boolean = true;

  constructor() {
    super();
    this.client = new Gitlab({
      host: GITLAB.HOST,
      token: GITLAB.TOKEN
    });
    this.isLoading = false;
  }

  fetchIssues = async (
    state: string = 'all',
    perPage: number = GITLAB.ISSUES_PER_PAGE
  ): Promise<any> => {
    return await this.client.Issues.all({
      projectId: GITLAB.PROJECT_ID,
      state,
      perPage
    });
  };

  fetchLabels = async (): Promise<any> => {
    return await this.client.Labels.all(GITLAB.PROJECT_ID);
  };

  fetchDiscussions = async (id: number): Promise<any> => {
    return await this.client.IssueDiscussions.all(GITLAB.PROJECT_ID, id);
  };
}

export default GitlabService;
