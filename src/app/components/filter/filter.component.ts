import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  sortActions = [];
  minVal = 0;
  maxVal = 500;
  minRangeVal = 50;
  maxRangeVal = 200;
  step = 10;
  tickInterval = 10;

  constructor(public snackBar: MatSnackBar) {}
  ngOnInit() {
    this.sortActions = [
      { icon: '', desc: 'Relevance', value: 'rel' },
      { icon: 'trending_up', desc: 'Price: Low to High', value: 'lth' },
      { icon: 'trending_down', desc: 'Price: High to Low', value: 'htl' },
      { icon: 'star', desc: 'Rating', value: 'ret' },
      { icon: 'fiber_new', desc: 'Newest', value: 'new' }
    ];
  }
  onChange(slider, rangeComponent) {
    switch (rangeComponent.label) {
      case 'Min':
        if (slider.value >= this.maxRangeVal) {
          slider.value = this.maxRangeVal - this.step;
          this.snackBar.open('Min cannot be greater than Max');
        }
        this.minRangeVal = slider.value;
        break;
      case 'Max':
        if (slider.value <= this.minRangeVal) {
          slider.value = this.minRangeVal + this.step;
          this.snackBar.open('Max cannot be lesser than Min');
        }
        this.maxRangeVal = slider.value;
        break;
    }
    rangeComponent.value = slider.value;
  }
}
