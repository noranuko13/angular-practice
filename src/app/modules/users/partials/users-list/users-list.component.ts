import { Component, OnInit } from '@angular/core';

import { UserInterface as IUser } from 'src/app/interfaces/user.interface';
import { user } from 'src/resources/user';

import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
  ]
})
export class UsersListComponent implements OnInit {

  resources = { user };
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  users: IUser[];

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.setUsers();
  }

  private setUsers(): void {
    this.service.getUsers().subscribe(users => this.users = users);
  }

}
