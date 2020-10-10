import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-base',
  templateUrl: './users-base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
