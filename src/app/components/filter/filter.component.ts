import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  sortActions = [];
  minVal = 0;
  maxVal = 500;
  step = 10;
  tickInterval = 10;
  @ViewChild('minRange') minRange;
  @ViewChild('maxRange') maxRange;

  constructor() {}
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
        this.maxRange.value =
          slider.value >= this.maxRange.value
            ? slider.value
            : this.maxRange.value;
        break;
      case 'Max':
        this.minRange.value =
          slider.value <= this.minRange.value
            ? slider.value
            : this.minRange.value;
    }
    rangeComponent.value = slider.value;
  }
  // onChange(slider, rangeComponent) {
  //   switch (rangeComponent.label) {
  //     case 'Min':
  //       if (slider.value >= this.maxRange.value) {
  //         slider.value = this.maxRange.value - this.step;
  //         this.snackBar.open('Min cannot be greater than Max');
  //       }
  //       this.minRangeVal = slider.value;
  //       break;
  //     case 'Max':
  //       if (slider.value <= this.minRangeVal) {
  //         slider.value = this.minRangeVal + this.step;
  //         this.snackBar.open('Max cannot be lesser than Min');
  //       }
  //       this.maxRange.value = slider.value;
  //       break;
  //   }
  //   rangeComponent.value = slider.value;
  // }
}
