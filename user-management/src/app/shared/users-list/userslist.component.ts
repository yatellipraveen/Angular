import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html'
})
export class UserslistComponent implements OnInit,OnChanges, DoCheck {
  @Input() module: string;
  userList: User[];
  constructor(private users: UsersService) {
  
  }

  ngOnInit(){
    this.userList=this.users.getAllUsers();
  }

  ngOnChanges(){
    
  }

  ngDoCheck(){
    if (this.module === 'active') {
      this.userList=this.userList.filter(user=>!user.isDeleted);
    }else if( this.module === 'deleted'){
      this.userList=this.userList.filter(user=>user.isDeleted);
    } 
  }
}
