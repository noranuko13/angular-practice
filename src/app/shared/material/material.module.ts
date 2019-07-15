import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatToolbarModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ],
})
export class MaterialModule { }
