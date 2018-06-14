import { NgModule } from '@angular/core';
import { AppSharedModule } from './app-shared.module';

import { SetupComponent } from '../components/setup/setup.component';
import { NavListComponent } from '../components/nav-list/nav-list.component';
import { LinearIconListComponent } from '../components/linear-icon-list/linear-icon-list.component';

@NgModule({
  imports: [AppSharedModule],
  exports: [SetupComponent, LinearIconListComponent],
  declarations: [SetupComponent, NavListComponent, LinearIconListComponent]
})
export class ComponentsModule {}
