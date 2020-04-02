import { NgModule } from '@angular/core';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './user-details/details.component';
import { UserStatusPipe } from './user-status.pipe';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFullName } from './user-fullname.pipe';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      { path: 'details/:id', component: DetailsComponent },
      { path: 'createuser', component: CreateUserComponent },
      { path: 'edit/:id', component: EditUserComponent }
    ]
  }
];
@NgModule({
  declarations: [
    ManageComponent,
    DetailsComponent,
    UserStatusPipe,
    CreateUserComponent,
    EditUserComponent,
    UserFullName,
    
  ],
  imports: [SharedModule, RouterModule.forChild(routes), ReactiveFormsModule]
})
export class ManageModule {}
