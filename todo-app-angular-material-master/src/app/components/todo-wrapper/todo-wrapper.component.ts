import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';


@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})
export class TodoWrapperComponent implements OnInit {
  @Input()
  private showingProfile: boolean;

  constructor(private todoService: TodoService) {
    this.showingProfile = todoService.getShowprofile();

  }

  ngOnInit() {
  }

}
