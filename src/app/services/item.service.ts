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
  getItem(itemId) {
    this.item = {
      id: itemId,
      name: 'Item',
      img: 'assets/img/items/dummy.jpg',
      price: itemId * 10
    };
    return this.item;
  }
  private generateItems(num) {
    this.items = [];
    for (let i = 1; i <= num; i++) {
      this.items.push({
        id: i + 1,
        name: 'Item',
        img: 'assets/img/items/dummy.jpg',
        price: i * 10
      });
    }
    return [...this.items];
  }
}
