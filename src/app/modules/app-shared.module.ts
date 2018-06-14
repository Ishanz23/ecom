import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  exports: [AppRoutingModule, MaterialModule, CommonModule],
  declarations: []
})
export class AppSharedModule {}
