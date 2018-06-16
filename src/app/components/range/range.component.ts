import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {
  @Input() label;
  @Input() minVal;
  @Input() maxVal;
  @Input() step;
  @Input() tickInterval;
  @Input() color;
  @Input() value;
  @Output() change = new EventEmitter();

  constructor() {}
  onChange(event) {
    this.change.emit(event);
  }
}
