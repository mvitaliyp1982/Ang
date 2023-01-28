import {Component} from '@angular/core';
import {AudiService} from './AudiService';
import {ToDoItem} from './ToDoItem';
import {ITEMS} from './mock-todo-items';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [AudiService],
})
export class SwitchComponent {
  result:any;
  items = ITEMS;

  toDoItem:ToDoItem = {
    id: 11,
    name2: 'XXX',
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

  aud:string[] = []
  name_car:string = ''
  car:any
  bmwModels:Array <string> = ['BMW iX(ЕЛЕКТРО)', 'BMW Z4', 'BMW X5', 'BMW X1']
  // audiModels:string[] = AudiService.getData()
  mercedesModels:Array <string> = ['Mercedes-Benz C-Class Cabriolet', 'Mercedes-AMG GT 4-дверне купе', 'Mercedes-AMG GLE']
  constructor(private audiService:AudiService){

  }
  addCar(nameCar:string){
    this.audiService.addData(nameCar);
  }
  ngOnInit(){
    this.aud = this.audiService.getData();
  }
}