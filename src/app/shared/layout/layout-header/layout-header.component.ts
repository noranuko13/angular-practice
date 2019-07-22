import { Component } from '@angular/core';

import site from 'src/resources/site';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
})
export class LayoutHeaderComponent {

  resources = { site };

}
