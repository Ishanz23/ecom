import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from '../pages/error/error.component';
import { HomeComponent } from '../pages/home/home.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { ItemsComponent } from '../pages/items/items.component';
import { ItemComponent } from '../pages/item/item.component';

const routes: Routes = [
  { path: 'items/:categoryId/:itemId', component: ItemComponent },
  { path: 'items/:categoryId', component: ItemsComponent },
  { path: 'items', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/items/1', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
