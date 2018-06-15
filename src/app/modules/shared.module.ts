import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [],
  exports: [RoutingModule, MaterialModule, CommonModule, FormsModule],
  declarations: []
})
export class SharedModule {}
