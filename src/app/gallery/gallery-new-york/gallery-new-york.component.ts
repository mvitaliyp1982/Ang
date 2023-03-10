import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-new-york',
  templateUrl: './gallery-new-york.component.html',
  styleUrls: ['./gallery-new-york.component.css']
})
export class GalleryNewYorkComponent {
  city:Array<string> = ['San Francisco', 'London', 'New York', 'Cape Town', 'Beijing', 'Paris']
  src:Array<string> = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/london-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/new-york-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/cape-town-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg']
  info:Array<string> = ['1624', '1 223,59', '8 804 190 особи  (2020)', 'Засновано', 'Площа', 'Населення']
  img:Array<string> = ['../../assets/NY1.webp', '../../assets/NY2.avif', '../../assets/NY3.avif']
}
