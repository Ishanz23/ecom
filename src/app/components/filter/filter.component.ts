import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  sortActions = [];
  minVal = 50;
  maxVal = 100;
  step = 10;

  constructor() {}
  ngOnInit() {
    this.sortActions = [
      { icon: '', desc: 'Relevance' },
      { icon: 'trending_up', desc: 'Price: Low to High' },
      { icon: 'trending_down', desc: 'Price: High to Low' },
      { icon: 'star', desc: 'Rating' },
      { icon: 'fiber_new', desc: 'Newest' }
    ];
  }
  onChange(type, value) {
    if (type === 'min') {
      if (this.minVal >= this.maxVal) {
        this.minVal = this.maxVal - this.step;
      }
    } else {
      if (this.maxVal <= this.minVal) {
        this.maxVal = this.minVal + this.step;
      }
    }
  }
}
