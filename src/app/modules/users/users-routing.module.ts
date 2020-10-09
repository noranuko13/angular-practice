import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersBaseComponent } from './pages/users-base.component';

const routes: Routes = [
  {
    path: '',
    component: UsersBaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
