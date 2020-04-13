import { NgModule } from '@angular/core';
import { DeletedComponent } from './deleted.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[
    {path:'deleted', component: DeletedComponent}
]
@NgModule({
    declarations:[DeletedComponent],
    imports:[SharedModule, RouterModule.forChild(routes)],
    
})
export class DeletedModule{

}