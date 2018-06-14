import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { ComponentsModule } from './components.module';

import { ErrorComponent } from '../pages/error/error.component';
import { HomeComponent } from '../pages/home/home.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { ItemsComponent } from '../pages/items/items.component';
import { ItemComponent } from '../pages/item/item.component';

@NgModule({
  imports: [SharedModule, ComponentsModule],
  exports: [],
  declarations: [
    ErrorComponent,
    HomeComponent,
    CategoriesComponent,
    ItemsComponent,
    ItemComponent
  ]
})
export class PagesModule {}
