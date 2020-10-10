import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInterface as IUser } from 'src/app/interfaces/user.interface';

import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.container.html',
  styles: [
  ]
})
export class UsersListContainer {

  users$: Observable<IUser[]> = this.service.getUsers();

  constructor(private service: UsersService) { }

}
