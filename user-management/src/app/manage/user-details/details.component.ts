import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  user: User;
  constructor(private users: UsersService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.user = this.users.getUser(id);

    this.route.params.subscribe(params => {
      id = params['id'];
      this.user = this.users.getUser(id);
    });
  }
}
