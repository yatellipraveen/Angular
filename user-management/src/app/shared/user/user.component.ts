import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { HttpService } from 'src/app/http.service';

import { constants } from '../../constants'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{
  @Input() user: User;
  @Input() module: string;

  const;

  constructor(private http : HttpService) {}

  ngOnInit(){
    this.const=constants;

  }
  onActivate() {
    this.http.activateUser(this.user);
  }
  onDeactivate() {
    this.http.deactivateUser(this.user);
  }
}
