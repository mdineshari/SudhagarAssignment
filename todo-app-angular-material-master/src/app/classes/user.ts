export class User {
  idx: number;
  realName: string;
  email: string;

  constructor(idx: number, realName: string, email: string) {
    this.idx = idx;
    this.realName = realName;
    this.email = email;
  }
}
