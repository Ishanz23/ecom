import { MatTooltipDefaultOptions } from '@angular/material';
import { MatSnackBarConfig } from '@angular/material';

export const tooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 100,
  touchendHideDelay: 100
};
export const snackbarDefaults: MatSnackBarConfig = {
  duration: 2000,
  horizontalPosition: 'start'
};
