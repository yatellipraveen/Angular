import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html'
})
export class UserslistComponent implements OnInit,OnChanges, DoCheck {
  @Input() module: string;
  temp: User[];
  constructor(private users: UsersService) {
  
  }

  ngOnInit(){
 
  }

  ngOnChanges(){
    
  }

  ngDoCheck(){
    if (this.module === 'active') {
      this.temp=this.users.usersList.filter(user=>!user.isDeleted);
    }else if( this.module === 'deleted'){
      this.temp=this.users.usersList.filter(user=>user.isDeleted);
    } else {
      this.temp = this.users.usersList;
    }
  }
}
