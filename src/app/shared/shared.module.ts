import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
