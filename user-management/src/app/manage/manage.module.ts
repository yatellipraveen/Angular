import { NgModule } from '@angular/core';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './user-details/details.component';

const routes:Routes=[
    {path:'', component: ManageComponent , 
        children:[
            {path:'details/:id', component: DetailsComponent}
        ]
    }

]
@NgModule({
    declarations:[ManageComponent,DetailsComponent],
    imports:[SharedModule, RouterModule.forChild(routes)]
})
export class ManageModule{

}