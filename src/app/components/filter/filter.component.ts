import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { MatAccordion } from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [
    trigger('expanded', [
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('* <=> true', animate('150ms'))
    ])
  ]
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
  @ViewChild(MatAccordion) accordion: MatAccordion;
  isExpanded = false;
  @Output() drawerClose = new EventEmitter();

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
      this.brands.push({ desc: `Brand${i + 1}`, selected: true });
    }
    console.log(this.accordion);
  }
  emitDrawerClose() {
    this.drawerClose.emit();
  }
  toggleAccordion() {
    this.isExpanded ? this.accordion.closeAll() : this.accordion.openAll();
    this.isExpanded = !this.isExpanded;
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
}
