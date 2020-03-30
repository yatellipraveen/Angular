import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeletedModule } from './deleted/deleted.module';
import { HomeComponent } from './home/home.component';
import { ActiveModule } from './active/active.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeletedModule,
    ActiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
