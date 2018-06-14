import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from '../pages/item/item.component';
import { ItemsComponent } from '../pages/items/items.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { HomeComponent } from '../pages/home/home.component';
import { ErrorComponent } from '../pages/error/error.component';

const routes: Routes = [
  {
    path: 'home/:categoryId/:itemId',
    redirectTo: 'categories/:categoryId/:itemId',
    pathMatch: 'full'
  },
  {
    path: 'home/:categoryId',
    redirectTo: 'categories/:categoryId',
    pathMatch: 'full'
  },
  { path: 'items/:categoryId/:itemId', component: ItemComponent },
  { path: 'items/:categoryId', component: ItemsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
