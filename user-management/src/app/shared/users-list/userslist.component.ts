import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/user.model';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
})
export class UserslistComponent implements OnInit {
  @Input() module: string;
  userList: User[];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => {
      this.userList = data as any;
    });
  }
}
