export class Item {
  id: Number;
  name: String;
  userId: Number;

  constructor(name: String, userId?: Number, id?: Number) {
    this.name = name;
    this.userId = userId;
    this.id = id;
  }
}
