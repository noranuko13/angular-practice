import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/ja';

import { User } from './interfaces/user';

const oneUser = (): User => {
  return {
    id: faker.random.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };
};
const manyUsers = (count = 5): User[] => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push(oneUser());
  }
  return users;
};

export class InMemoryWebApiService implements InMemoryDbService {

  createDb() {
    return {
      users: manyUsers(),
    };
  }

}
