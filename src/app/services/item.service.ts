import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Item[];
  item: Item;

  getAllItems(categoryId) {
    return this.generateItems(categoryId * 5);
  }
  getItem(id) {
    this.item = {
      id: id,
      name: 'Item',
      img: 'assets/img/items/dummy.jpg',
      price: id * 10
    };
    return this.item;
  }
  private generateItems(num) {
    this.items = [];
    for (let i = 1; i <= num; i++) {
      this.items.push(this.getItem(i));
    }
    return [...this.items];
  }
}
