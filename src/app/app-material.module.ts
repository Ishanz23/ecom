import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: []
})
export class AppMaterialModule {}
