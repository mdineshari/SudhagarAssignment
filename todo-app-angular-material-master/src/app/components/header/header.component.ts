import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  private date = Date.now();

  ngOnInit() {
  }

  private showProfile(): void {
    console.log('Showing Profile');
  }

}
