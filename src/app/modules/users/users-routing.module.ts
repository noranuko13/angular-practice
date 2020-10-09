import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersBaseComponent } from './pages/users-base.component';
import { UsersSearchComponent } from './pages/users-search/users-search.component';

const routes: Routes = [
  {
    path: '',
    component: UsersBaseComponent,
    children: [
      { path: 'search', component: UsersSearchComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
