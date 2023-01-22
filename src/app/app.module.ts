import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StrangeHobbyComponent } from './strange-hobby/strange-hobby.component';
import { Hw02Component } from './hw02/hw02.component';
import { Hw01Component } from './hw01/hw01.component';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {path:'', component: BaseComponent},
  {path:'StrangeHobbyComponent', component: StrangeHobbyComponent},
  {path:'Hw02Component', component: Hw02Component},
  {path:'Hw01Component', component: Hw01Component},
]

@NgModule({
  declarations: [
    AppComponent,
    StrangeHobbyComponent,
    Hw02Component,
    Hw01Component,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
