import { NgModule } from '@angular/core';
import { ActiveComponent } from './active.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
    {path:'active', component:ActiveComponent}
]
@NgModule({
    declarations:[ActiveComponent],
    imports:[SharedModule, RouterModule.forChild(routes)],
})
export class ActiveModule{

}