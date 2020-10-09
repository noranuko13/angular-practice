import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersBaseComponent } from './pages/users-base.component';
import { UsersSearchComponent } from './pages/users-search/users-search.component';


@NgModule({
  declarations: [
    UsersBaseComponent,
    UsersSearchComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
