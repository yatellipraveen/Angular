import { Component, OnInit } from '@angular/core';
import { globalConstants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  globalConst;

  ngOnInit(){
    this.globalConst=globalConstants;
  }
}
