import { Component, OnInit } from '@angular/core';

import { globalConstants } from '../constants'

@Component({
    selector:'app-manage',
    templateUrl:'./manage.component.html'
})
export class ManageComponent implements OnInit{
    globalConst;
    
    ngOnInit(){
        this.globalConst=globalConstants;
    }
}