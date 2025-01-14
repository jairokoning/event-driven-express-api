export class User {
  constructor(
    public id: string,
    public name: string,
    public githubUrl: string,
    public email: string,
    public isValidated?: boolean,
  ) {
    this.isValidated = false;
  }
}
