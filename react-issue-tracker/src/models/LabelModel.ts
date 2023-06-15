import GitlabService from '../services/GitlabService';
import { Label } from '../types';

const service = new GitlabService();

class LabelModel {
  static all = async (): Promise<Label[]> => {
    return await service.fetchLabels();
  };
}

export default LabelModel;
