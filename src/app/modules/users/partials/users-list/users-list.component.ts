import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UserInterface as IUser } from 'src/app/interfaces/user.interface';
import { user } from 'src/resources/user';

@Component({
  selector: 'app-users-list-ui',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {

  resources = { user };
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  @Input()
  users: IUser[] = [];

}
