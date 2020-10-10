import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
