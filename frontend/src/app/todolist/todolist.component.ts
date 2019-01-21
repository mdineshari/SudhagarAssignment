import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { ApiService } from '../_services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  newItemForm: FormGroup;
  userId: number;

  items: Item[];
  static instance: TodolistComponent;

  constructor(
    private service: ApiService,
    private router: Router,
    private builder: FormBuilder,
    private auth: AuthService
  ) {
    /*private service: HttpItemService*/
    this.newItemForm = builder.group(new Item(''));
    this.userId = this.getCurrentToken();
    this.updateLocalItems();
  }

  getCurrentToken() {
    return this.auth.getCurrentSession().getToken().userId;
  }
  updateLocalItems() {
    this.service.getItems(this.userId).then(items => {
      if (items) this.items = items;
      else this.items = [];
    });
  }

  ngOnInit() {}

  onRemove(item) {
    this.service.removeItem(item).then(() => this.updateLocalItems());
  }

  onSubmit(): void {
    this.addItem(this.newItemForm.value, this.userId);
  }

  addItem(item: Item, userId: Number) {
    item.userId = userId;
    console.log(item);
    this.service
      .addItem(item)
      .then(() => {
        this.updateLocalItems();
        this.newItemForm = this.builder.group(new Item(''));
      })
      .catch(err => console.log(err));
  }
  onLogout() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
