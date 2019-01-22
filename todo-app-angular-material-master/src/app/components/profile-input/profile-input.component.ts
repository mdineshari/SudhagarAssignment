import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodoService} from '../../services/todo.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-profile-input',
  templateUrl: './profile-input.component.html',
  styleUrls: ['./profile-input.component.css']
})
export class ProfileInputComponent implements OnInit {

  @Input()
  private nameText: string;
  private emailText: string;
  // private userName: User;

  private showingProfile: boolean;

  constructor(private todoService: TodoService) {
    this.showingProfile = todoService.getShowprofile();
  }

  // private showProfile(): void {
  //   // console.log('Am showing profile now.');
  //   this.todoService.setShowprofile();
  // }

  private saveUser(): void {
    // console.log('Saving the user');
    // console.log(this.nameText);
    // console.log(this.emailText);
    this.todoService.addUser(this.nameText, this.emailText);

  }

  ngOnInit() {
  }

}
