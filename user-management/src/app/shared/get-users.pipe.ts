import { Pipe, PipeTransform } from "@angular/core";
import { User } from '../user.model';

@Pipe({
    name : 'getusers'
})

export class GetUsers implements PipeTransform{
    transform(usersList : User[] , module: string) : User[]{
        if (module === 'active') {
            return  usersList?.filter(user => !user.isDeleted);
          } else if (module === 'deleted') {
            return usersList?.filter(user => user.isDeleted);
          }else return usersList;
    }
}