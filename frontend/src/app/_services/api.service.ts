import { Injectable } from '@angular/core';
import { Item } from '../_model/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractItemsService } from '../_services/items/abstract-items.service';
import { HttpsItemsService } from '../_services/items/https-items.service';
import { HttpItemsService } from '../_services/items/http-items.service';
import { AuthService } from '../_services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  itemsStrategy: AbstractItemsService;

  constructor(http: HttpClient, auth: AuthService) {
    this.itemsStrategy = new HttpsItemsService(http, auth);
  }
  getCurrentItem(): Item {
    return this.itemsStrategy.getCurrentItem();
  }
  setCurrentItem(item: Item) {
    this.itemsStrategy.setCurrentItem(item);
  }
  getItems(id): Promise<Item[]> {
    return this.itemsStrategy.getItems(id);
  }
  removeItem(item: Item): Promise<Object> {
    return this.itemsStrategy.removeItem(item);
  }
  addItem(item): Promise<Object> {
    return this.itemsStrategy.addItem(item);
  }
  updateItem(item: Item): Promise<Object> {
    return this.itemsStrategy.updateItem(item);
  }
}
