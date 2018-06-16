import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category.model';
import { Item } from '../../models/item.model';
import { CategoryService } from '../../services/category.service';
import { ItemsService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  category: Category;
  items: Item[] = [];
  mobileQuery: MediaQueryList;
  @Output() openDrawer = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private itemsService: ItemsService
  ) {}
  ngOnInit() {
    const categoryId = +this.route.snapshot.paramMap.get('categoryId');
    this.category = this.categoryService.getCategory(categoryId);
    this.items = this.itemsService.getAllItems(categoryId);
  }
  onClick() {
    this.openDrawer.emit();
  }
}
