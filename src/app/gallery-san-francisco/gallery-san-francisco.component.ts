import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-san-francisco',
  templateUrl: './gallery-san-francisco.component.html',
  styleUrls: ['./gallery-san-francisco.component.css']
})
export class GallerySanFranciscoComponent {
  city:Array<string> = ['San Francisco', 'London', 'New York', 'Cape Town', 'Beijing', 'Paris']
  src:Array<string> = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/london-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/new-york-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/cape-town-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg']
  info:Array<string> = ['1776', '600,7', '837 442', 'Засновано', 'Площа', 'Населення' ]
}
