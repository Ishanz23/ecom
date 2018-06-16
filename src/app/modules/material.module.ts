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
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatExpansionModule,
  MatSliderModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonToggleModule
} from '@angular/material';
import { tooltipDefaults, snackbarDefaults } from './module.providers';

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
    MatTooltipModule,
    MatExpansionModule,
    MatSliderModule,
    MatSnackBarModule,
    MatButtonToggleModule
  ],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipDefaults },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: snackbarDefaults }
  ]
})
export class MaterialModule {}
