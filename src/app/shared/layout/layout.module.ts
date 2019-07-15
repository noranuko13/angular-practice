import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

const components = [
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
})
export class LayoutModule { }
