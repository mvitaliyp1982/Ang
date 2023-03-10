import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-paris',
  templateUrl: './gallery-paris.component.html',
  styleUrls: ['./gallery-paris.component.css']
})
export class GalleryParisComponent {
  city:Array<string> = ['San Francisco', 'London', 'New York', 'Cape Town', 'Beijing', 'Paris']
  src:Array<string> = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/london-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/new-york-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/cape-town-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg']
  info:Array<string> = ['-300', '105,4', '2 175 601 осіб (2021)', 'Засновано', 'Площа', 'Населення']
  img:Array<string> = ['../../assets/Paris1.jpg', '../../assets/Paris2.jpg', '../../assets/Paris3.jpg']
}
