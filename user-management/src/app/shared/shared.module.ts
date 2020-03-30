import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserslistComponent } from './users-list/userslist.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations:[ UserComponent, UserslistComponent],
    imports:[CommonModule, RouterModule],
    exports:[UserslistComponent,CommonModule]
})
export class SharedModule{

}