import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  category: Category;

  getTopCategories(num) {
    return this.generateCategories(num);
  }
  getAllCategories() {
    return this.generateCategories(15);
  }
  getCategory(id) {
    this.category = {
      id: id,
      name: 'Category',
      img: 'assets/img/items/dummy.jpg'
    };
    return this.category;
  }
  private generateCategories(num) {
    this.categories = [];
    for (let i = 1; i <= num; i++) {
      this.categories.push(this.getCategory(i));
    }
    return [...this.categories];
  }
}
