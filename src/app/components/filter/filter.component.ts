import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  sortActions = [];
  sizes = [];
  brands = [];
  minVal = 0;
  maxVal = 500;
  step = 10;
  tickInterval = 10;
  @ViewChild('minRange') minRange;
  @ViewChild('maxRange') maxRange;

  constructor() {}
  ngOnInit() {
    this.sortActions = [
      { icon: '', value: 'Relevance' },
      { icon: 'trending_up', value: 'Price: Low to High' },
      { icon: 'trending_down', value: 'Price: High to Low' },
      { icon: 'star', value: 'Rating' },
      { icon: 'fiber_new', value: 'Newest' }
    ];
    for (let i = 0; i < 3; i++) {
      this.sizes.push({ desc: `${Math.pow(2, i + 1)}"`, selected: true });
    }
    this.brands.push(
      { desc: 'Turbo', selected: true },
      { desc: 'Tarian', selected: true },
      { desc: 'Siya', selected: true },
      { desc: 'Kaba', selected: true },
      { desc: 'Local', selected: true }
    );
  }
  onInput(slider, rangeComponent) {
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
  log(event) {
    console.log(event);
  }
}
