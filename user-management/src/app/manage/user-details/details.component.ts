import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user.model';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.http.getUserByID(id).subscribe(user => {
      this.user = user as any;
    });

    this.route.params.subscribe(params => {
      id = params['id'];
      this.http.getUserByID(id).subscribe(user => {
        this.user = user as any;
      });
    });
  }
}
