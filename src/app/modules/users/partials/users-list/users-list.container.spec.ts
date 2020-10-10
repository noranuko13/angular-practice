import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedModule } from 'src/app/shared/shared.module';

import { UsersListComponent } from './users-list.component';
import { UsersListContainer } from './users-list.container';

describe('UsersListContainer', () => {
  let component: UsersListContainer;
  let fixture: ComponentFixture<UsersListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientTestingModule,
      ],
      declarations: [ UsersListComponent, UsersListContainer ]
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
