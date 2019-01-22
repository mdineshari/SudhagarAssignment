import {Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';
import {User} from '../classes/user';
import {FormControl} from '@angular/forms';

@Injectable()
export class TodoService {

  todoDate = new FormControl(new Date());
  private todoArr: Todo[];
  private userArr: User[];
  private nextIndex: number;
  private nextUserindex: number;
  private isShowingtodo: boolean;
  private isShowingprofile: boolean;
  private showTodo: boolean;
  private showProfile: boolean;

  constructor() {
    this.todoArr = [
      // new Todo(0, '', 'Countin\' flowers on the wall. That don\'t bother me at all.'),
      // new Todo(1, '', 'Playin\' solitaire till dawn with a deck of fifty-one'),
      new Todo(0, '', 'Smokin\' cigarettes and watchin\' Captain Kangaroo')
  ];
    this.userArr = [
      new User(0, 'Guest', 'something@example.com'),
    ];
    this.nextIndex = 1;
    this.nextUserindex = 1;
    this.isShowingtodo = false;
    this.isShowingprofile = false;
    this.showTodo = true;
    this.showProfile = false;
  }

  public getTodos(): Todo[] {
    return this.todoArr;
  }

  public addTodo(text: string, date: string): void {
    // Create a new todo from the input
    const todo = new Todo(this.nextIndex, text, date);
    // Push the todo to the array
    this.todoArr.push(todo);
    // Hide the todo input
    this.showTodo = false;
    // Increase the index
    this.nextIndex++;
  }

  public deleteTodo(idx: number): void {
    this.todoArr = this.todoArr.filter(function (item) {
      return item.idx !== idx;
    });
    console.log(this.todoArr);

  }

  public getShowinput(): boolean {
    return this.showTodo;
  }

  public showInput(): void {
    this.showTodo = !this.showTodo;
  }

  public getShowprofile(): boolean {
    return this.showProfile;
  }


  public setShowprofile(): void {
    this.showProfile = !this.showProfile;
  }


  public addUser(someName: string, someEmail: string): void {
    // Check to see if it is modifying an existing user
    // Since we are not storing the user data as persistent, we can just check to see if the current user matches the latest index
    const x = this.userArr.length;
    if (x !== 1) {
      this.userArr.pop();
      this.nextUserindex = x;
    } else {
      this.nextUserindex++;
    }
    const user = new User(this.nextUserindex, someName, someEmail);
    this.userArr.push(user);
    this.setShowprofile();
  }

  public getProfile(): string {
    return this.userArr[this.userArr.length - 1].realName;
  }

}


