import { Component, OnInit } from '@angular/core';
import { constants } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  const;
  ngOnInit() {
    this.const = constants;
  }
}
