import { Component } from '@angular/core';
import {ToDoItem} from './ToDoItem';
import {ITEMS} from './mock-todo-items';
import { AudiService } from './AudiService';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [AudiService]
})
export class SwitchComponent {
  result:any;
  items = ITEMS
  toDoItem:ToDoItem = {
    id: 11,
    name: 'NAME',
    isComplite: true
  }

  showResult(text:any) {
    this.result =text;
  }
  plus(left:any, right:any) {
    this.result = Number(left) + Number(right);
  }
  minus(left:any, right:any) {
    this.result = Number(left) - Number(right);
  }
  divide(left:any, right:any) {
    this.result = Number(left) / Number(right);
  }
  multiply(left:any, right:any) {
    this.result = Number(left) * Number(right);
  }

  aud:string[] = [];
  name:string = '';
  car:any;
  bmwModels:Array <string> = ['BMW iX', 'BMW Z4', 'BMW X5', 'BMW X1'];
  // audiModels:string[] = AudiService.getData()
  mercedesModels:Array <string> = ['Mercedes-Benz C-Class Cabriolet', 'Mercedes-AMG GT', 'Mercedes-AMG GT'];
  
  constructor(private audiService:AudiService){

  }
  addCar(name:string){
    this.audiService.addData(name);
  }
  ngOnInit(){
    this.aud = this.audiService.getData();
  }
}