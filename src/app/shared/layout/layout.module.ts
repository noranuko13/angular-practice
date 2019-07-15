import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';

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
