import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/ja';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces';
import { Observable } from 'rxjs';

import { UserInterface as IUser } from './interfaces/user.interface';

const oneUser = (): IUser => {
  return {
    id: faker.random.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };
};
const manyUsers = (count = 5): IUser[] => {
  const users: IUser[] = [];
  for (let i = 0; i < count; i++) {
    users.push(oneUser());
  }
  return users;
};

export class InMemoryWebApiService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      users: manyUsers(),
    };
  }

}
