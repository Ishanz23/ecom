import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatTooltipModule,
  MAT_TOOLTIP_DEFAULT_OPTIONS
} from '@angular/material';
import { tooltipDefaults } from './providers/tooltipDefaults.provider';

@NgModule({
  imports: [],
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
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipDefaults }
  ]
})
export class MaterialModule {}