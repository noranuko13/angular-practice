import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { UserInterface as IUser } from 'src/app/interfaces/user.interface';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let spy: { get: jasmine.Spy };
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    spy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsersService(spy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUsers', () => {
    const expectedUsers: IUser[] = [
      { id: 38857, firstName: '蒼空', lastName: '佐藤' },
      { id: 97587, firstName: '美咲', lastName: '佐々木' },
    ];
    spy.get.and.returnValue(of(expectedUsers));

    service.getUsers().subscribe(
      users => expect(users).toEqual(expectedUsers, 'Get expected users.'),
      fail
    );
    expect(spy.get.calls.count()).toBe(1, 'HttpClient called once.');
  });
});
