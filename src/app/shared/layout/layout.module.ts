import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';

const components = [
  LayoutHeaderComponent,
  LayoutFooterComponent,
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
