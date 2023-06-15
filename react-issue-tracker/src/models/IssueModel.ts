import GitlabService from '../services/GitlabService';
import { Issue } from '../types';
import LabelModel from './LabelModel';

const service = new GitlabService();

class IssueModel {
  constructor() {}
  static opened = async (): Promise<Issue[]> => {
    return await IssueModel.serializeLabels(await service.fetchIssues('opened'));
  };

  static async serializeLabels(issues: any[]) {
    const tempLabels = await LabelModel.all();
    issues.forEach((issue) => {
      issue.labels = issue.labels.map((label: string) => {
        const result = tempLabels.filter((item) => item.name == label);
        return result.length ? result[0] : {};
      });
    });
    return issues;
  }
}

export default IssueModel;
