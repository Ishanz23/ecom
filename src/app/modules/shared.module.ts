import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  exports: [RoutingModule, MaterialModule, CommonModule],
  declarations: []
})
export class SharedModule {}
