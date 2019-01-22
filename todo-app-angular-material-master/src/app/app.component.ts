import {Component} from '@angular/core';
import * as moment from 'moment';
import {TodoService} from './services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  constructor(private todoService: TodoService) {
    const now = moment();
  }
}
