import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  globalConst;
  ngOnInit() {
    this.globalConst = globalConstants;
  }
}
