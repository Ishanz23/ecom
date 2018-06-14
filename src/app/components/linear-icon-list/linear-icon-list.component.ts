import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linear-icon-list',
  templateUrl: './linear-icon-list.component.html',
  styleUrls: ['./linear-icon-list.component.scss']
})
export class LinearIconListComponent {
  @Input() list;
  @Input() nextRoute;
}
