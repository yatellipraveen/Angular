import { Pipe, PipeTransform } from "@angular/core";
import{User} from "../user.model"

@Pipe({
    name:'userfullname'
})

export class UserFullName implements PipeTransform{
    transform(user : User) : string{
        return user?.firstName+' '+user?.lastName;
    }
}