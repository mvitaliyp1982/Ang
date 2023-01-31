import { Component } from '@angular/core';
import { ITEMS } from './mock-todo-items';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  items = ITEMS;
}