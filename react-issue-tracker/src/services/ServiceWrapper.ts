class GitlabService {
  isLoading: boolean = true;

  constructor() {}

  protected sendRequest = async (func: Function): Promise<any> => {
    if (this.isLoading) return 'loading';
    this.isLoading = true;
    return await func()
      .then((res: any) => {
        this.isLoading = false;
        return res;
      })
      .catch((err: Error) => {
        console.error(err);
        this.isLoading = false;
      });
  };
}

export default GitlabService;
