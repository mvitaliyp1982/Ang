import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StrangeHobbyComponent } from './strange-hobby/strange-hobby.component';
import { Hw02Component } from './hw02/hw02.component';
import { Hw01Component } from './hw01/hw01.component';
import { BaseComponent } from './base/base.component';
import { BiggestAirplaneComponent } from './biggest-airplane/biggest-airplane.component';
import { BiggestCarComponent } from './biggest-car/biggest-car.component';
import { BiggestShipComponent } from './biggest-ship/biggest-ship.component';
import { BiggestCarAirplaneShipComponent } from './biggest-car-airplane-ship/biggest-car-airplane-ship.component';
import { SwitchComponent } from './switch/switch.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerySanFranciscoComponent } from './gallery-san-francisco/gallery-san-francisco.component';


const routes: Routes = [
  {path:'', component: BaseComponent,
  children:[
    {path: 'Airplane', component: BiggestAirplaneComponent},
    {path: 'Car', component: BiggestCarComponent},
    {path: 'Ship', component: BiggestShipComponent},
    {path: 'GalleryComponent', component: GalleryComponent},
    {path: 'SwitchComponent', component: SwitchComponent},
    {path: 'GallerySanFranciscoComponent', component: GallerySanFranciscoComponent},
  ]
},
    {path: 'StrangeHobbyComponent', component: StrangeHobbyComponent},
    {path: 'Hw02Component', component: Hw02Component},
    {path: 'Hw01Component', component: Hw01Component},
    {path: 'GalleryComponent', component: GalleryComponent},
    {path: 'GallerySanFranciscoComponent', component: GallerySanFranciscoComponent},   
]

const routes2: Routes = [
  {path:'', component: GalleryComponent,
  children:[
  {path: 'GallerySanFranciscoComponent', component: GallerySanFranciscoComponent},
  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    StrangeHobbyComponent,
    Hw02Component,
    Hw01Component,
    BaseComponent,
    BiggestAirplaneComponent,
    BiggestCarComponent,
    BiggestShipComponent,
    BiggestCarAirplaneShipComponent,
    SwitchComponent,
    GalleryComponent,
    GallerySanFranciscoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
