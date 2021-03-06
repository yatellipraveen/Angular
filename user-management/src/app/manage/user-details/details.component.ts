import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import {  globalConstants } from '../../constants'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  globalConst;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.globalConst=globalConstants;

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
