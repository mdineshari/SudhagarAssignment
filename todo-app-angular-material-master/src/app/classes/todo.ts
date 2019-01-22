export class Todo {
  idx: number;
  text: string;
  date: string;

  constructor(idx: number, date: string, text: string) {
    this.idx = idx;
    this.date = date;
    this.text = text;

  }
}
