import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedModule } from 'src/app/shared/shared.module';

import { UsersSearchComponent } from './users-search.component';
import { UsersListComponent } from '../../partials/users-list/users-list.component';
import { UsersListContainer } from '../../partials/users-list/users-list.container';

describe('UsersSearchComponent', () => {
  let component: UsersSearchComponent;
  let fixture: ComponentFixture<UsersSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientTestingModule ],
      declarations: [ UsersSearchComponent, UsersListComponent, UsersListContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
