import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

// Replaced this service with httpService API calls, 
// Not used in project anymore
export class UsersService {
  private usersList: User[] = [];
  id=7;
  constructor() {
    this.usersList.push(
      new User('1', 'One', 'user', 12, 'yes', '', true, new Date(2018, 3, 12))
    );
    this.usersList.push(
      new User('2', 'Two', 'user', 23, 'yes', '', true, new Date(2016, 1, 23))
    );
    this.usersList.push(
      new User('3', 'Three', 'user', 18, 'yes', '', false, new Date(2019, 10, 7))
    );
    this.usersList.push(
      new User('4', 'Four', 'user', 36, 'yes', '', true, new Date())
    );
    this.usersList.push(
      new User('5', 'Five', 'user', 54, 'yes', '', false, new Date(2019, 5, 21))
    );
    this.usersList.push(
      new User('6', 'Six', 'user', 27, 'yes', '', true, new Date(2018, 12, 23))
    );
  }

  createNewUser(firstName,lastName,login,password,age){
    this.usersList.push(new User(this.id.toString(),firstName,lastName,age,login,password,false,new Date()));
    this.id++;
  }

  getAllUsers() {
    return this.usersList;
  }

  getUser(id: string) {
    return this.usersList.find(user => user.id === id);
  }

  activateUser(id: string) {
    let index = this.usersList.findIndex(user => user.id === id);
    this.usersList[index].isDeleted = false;
  }

  deactivateUser(id: string) {
    let index = this.usersList.findIndex(user => user.id === id);
    this.usersList[index].isDeleted = true;
  }
}
