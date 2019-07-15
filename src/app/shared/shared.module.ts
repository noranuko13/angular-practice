import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
