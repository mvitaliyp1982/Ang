import { Component } from '@angular/core';
import { AudiService } from './AudiService';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [AudiService]
})
export class SwitchComponent {
  aud:string[] = []
  name:string = ''
  car:any
  bmwModels:Array <string> = ['BMW iX', 'BMW Z4', 'BMW X5', 'BMW X1']
  // audiModels:string[] = AudiService.getData()
  mercedesModels:Array <string> = ['Mercedes-Benz C-Class Cabriolet', 'Mercedes-AMG GT', 'Mercedes-AMG GT']
  constructor(private audiService:AudiService){

  }
  addCar(name:string){
    this.audiService.addData(name);
  }
  ngOnInit(){
    this.aud = this.audiService.getData();
  }
}