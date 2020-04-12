import { Component, OnInit } from '@angular/core';

import { constants } from '../constants'

@Component({
    selector:'app-manage',
    templateUrl:'./manage.component.html'
})
export class ManageComponent implements OnInit{
    const;
    
    ngOnInit(){
        this.const=constants;
    }
}