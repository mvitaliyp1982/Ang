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
import { GallerySanFranciscoComponent } from './gallery/gallery-san-francisco/gallery-san-francisco.component';
import { GalleryLondonComponent } from './gallery/gallery-london/gallery-london.component';
import { GalleryNewYorkComponent } from './gallery/gallery-new-york/gallery-new-york.component';
import { GalleryCapeTownComponent } from './gallery/gallery-cape-town/gallery-cape-town.component';
import { GalleryBeijingComponent } from './gallery/gallery-beijing/gallery-beijing.component';
import { GalleryParisComponent } from './gallery/gallery-paris/gallery-paris.component';
import { GalleryInfoComponent } from './gallery/gallery-info/gallery-info.component';


const routes: Routes = [
  {path:'', component: BaseComponent,
  children:[
    {path: 'Airplane', component: BiggestAirplaneComponent},
    {path: 'Car', component: BiggestCarComponent},
    {path: 'Ship', component: BiggestShipComponent},
    {path: 'Gallery', component: GalleryComponent},
    {path: 'Switch', component: SwitchComponent},
    // {path: 'GallerySanFrancisco', component: GallerySanFranciscoComponent},
  ]
},
    {path: 'StrangeHobbyComponent', component: StrangeHobbyComponent},
    {path: 'Hw02Component', component: Hw02Component},
    {path: 'Hw01Component', component: Hw01Component},
    // {path: 'Gallery', component: GalleryComponent},
    {path: 'GallerySanFrancisco', component: GallerySanFranciscoComponent},   
    {path: 'GalleryLondon', component: GalleryLondonComponent},
    {path: 'GalleryNewYork', component: GalleryNewYorkComponent},
    {path: 'GalleryCapeTown', component: GalleryCapeTownComponent},
    {path: 'GalleryBeijing', component: GalleryBeijingComponent},
    {path: 'GalleryParis', component: GalleryParisComponent},
    {path: 'GalleryInfo', component: GalleryInfoComponent},
    
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
    GalleryLondonComponent,
    GalleryNewYorkComponent,
    GalleryCapeTownComponent,
    GalleryBeijingComponent,
    GalleryParisComponent,
    GalleryInfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
