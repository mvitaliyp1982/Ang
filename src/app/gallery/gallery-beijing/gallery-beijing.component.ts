import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-beijing',
  templateUrl: './gallery-beijing.component.html',
  styleUrls: ['./gallery-beijing.component.css']
})
export class GalleryBeijingComponent {
  city:Array<string> = ['San Francisco', 'London', 'New York', 'Cape Town', 'Beijing', 'Paris']
  src:Array<string> = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/london-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/new-york-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/cape-town-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg']
  info:Array<string> = ['0938', '16 410,54', '21 893 095 осіб (2020)', 'Засновано', 'Площа', 'Населення']
  img:Array<string> = ['../../assets/Beijing1.avif', '../../assets/Beijing2.avif', '../../assets/Beijing3.avif']
}