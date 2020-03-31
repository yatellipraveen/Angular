import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
    providedIn:'root'
})
export class UsersService{
    private usersList: User[]=[];
    constructor(){
        this.usersList.push(new User("1","One","User",12,"yes","",true));
        this.usersList.push(new User("2","Two","User",23,"yes","",true));
        this.usersList.push(new User("3","Three","User",18,"yes","",false));
        this.usersList.push(new User("4","Four","User",36,"yes","",true));
        this.usersList.push(new User("5","Five","User",54,"yes","",false));
        this.usersList.push(new User("6","Six","User",27,"yes","",true));
    }

    getAllUsers(){
        return this.usersList;
    }

    
    getUser(id:string){
        return this.usersList.find(user=>user.id===id); 
    }

    activateUser(id:string){
        let index=this.usersList.findIndex(user=>user.id===id)
        this.usersList[index].isDeleted=false;
    }

    deactivateUser(id:string){
        let index=this.usersList.findIndex(user=>user.id===id)
        this.usersList[index].isDeleted=true;
    }
}