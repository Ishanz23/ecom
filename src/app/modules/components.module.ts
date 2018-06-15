import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { SetupComponent } from '../components/setup/setup.component';
import { NavListComponent } from '../components/nav-list/nav-list.component';
import { LinearIconListComponent } from '../components/linear-icon-list/linear-icon-list.component';
import { FilterComponent } from '../components/filter/filter.component';
import { RangeComponent } from '../components/range/range.component';

@NgModule({
  imports: [SharedModule],
  exports: [SharedModule, SetupComponent, LinearIconListComponent, FilterComponent],
  declarations: [
    SetupComponent,
    NavListComponent,
    LinearIconListComponent,
    FilterComponent,
    RangeComponent
  ],
  entryComponents: []
})
export class ComponentsModule {}
