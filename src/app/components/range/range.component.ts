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
  @Input() value;
  @Input() step;
  @Input() tickInterval;
  @Input() color;
  @Output() input = new EventEmitter();

  constructor() {}
  onInput(event) {
    this.input.emit(event);
  }
}
