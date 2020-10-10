import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersBaseComponent } from './pages/users-base.component';
import { UsersSearchComponent } from './pages/users-search/users-search.component';
import { UsersListComponent } from './partials/users-list/users-list.component';


@NgModule({
  declarations: [
    UsersBaseComponent,
    UsersSearchComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
