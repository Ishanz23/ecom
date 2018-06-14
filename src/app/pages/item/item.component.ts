import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  categoryId: number;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.categoryId = +this.route.snapshot.paramMap.get('categoryId');
    const itemId = +this.route.snapshot.paramMap.get('itemId');
    this.item = this.itemsService.getItem(itemId);
  }
}
