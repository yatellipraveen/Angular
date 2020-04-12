import { Component, OnInit } from '@angular/core';
import { constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  const;
  ngOnInit() {
    this.const = constants;
  }
}
