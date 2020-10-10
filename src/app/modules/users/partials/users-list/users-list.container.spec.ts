import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListContainer } from './users-list.container';

describe('UsersListContainer', () => {
  let component: UsersListContainer;
  let fixture: ComponentFixture<UsersListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
