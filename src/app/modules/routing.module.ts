import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from '../pages/item/item.component';
import { ItemsComponent } from '../pages/items/items.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { HomeComponent } from '../pages/home/home.component';
import { ErrorComponent } from '../pages/error/error.component';

const routes: Routes = [
  { path: 'items/:categoryId/:itemId', component: ItemComponent },
  { path: 'items/:categoryId', component: ItemsComponent },
  { path: 'items', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
