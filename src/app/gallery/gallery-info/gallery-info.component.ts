import { Component } from '@angular/core';
// import { AudiService } from './AudiService';
import { ToDoItem } from './ToDoItem';
import { ITEMS } from './mock-todo-items';

@Component({
  selector: 'app-gallery-info',
  templateUrl: './gallery-info.component.html',
  styleUrls: ['./gallery-info.component.css']
})
export class GalleryInfoComponent {
  items = ITEMS;
  city:any;

  toDoItem:ToDoItem = {
    id: 11,
    city: '',
    src: '',
    info1: '',
    info2: '',
    info3: '',
    que1: '',
    que2: '',
    que3: '',
    img1: '',
    img2: '',
    img3: '',
    isComplite: true
  }


}
