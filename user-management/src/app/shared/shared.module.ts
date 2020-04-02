import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserslistComponent } from './users-list/userslist.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GetUsers } from './get-users.pipe';


@NgModule({
    declarations:[ UserComponent, UserslistComponent, GetUsers],
    imports:[CommonModule, RouterModule],
    exports:[UserslistComponent,CommonModule]
})
export class SharedModule{

}