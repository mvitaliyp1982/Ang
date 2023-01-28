import { Component } from '@angular/core';

@Component({
  selector: 'app-hw02',
  templateUrl: './hw02.component.html',
  styleUrls: ['./hw02.component.css']
})
export class Hw02Component {
  profile:Array<string> =["01.06.1982", "+380673722498", "mvitaliyp1982@gmail.com", "Хмельницький", "Мединський Віталій Петрович"];
  work:Array<string> = [`МКП "Хмельницькводоканал" - 2004-2006`, `ТОВ "Карат" - 2006-по даний час`, `ще не придумав чим би похвалитись`];
  social:Array<string> = ["https://www.facebook.com/profile.php?id=100006269657922", "https://www.instagram.com/vitalii_medynskyi/"];
  salary:number = 1000;
  employment:Array<string> = [`часткова`, `1`];
  flag:boolean = true;
  age:any = 40;
  newDate:Date = new Date(1982,6,1);
  tm:any;
  info:string = 'hello';
  rs:any;

//   constructor() {
// this.rs = Number(this.newDate) - Number(Date.now())
//   }

  inc() {
    this.age++;
  }
  dec() {
    this.age--;
  }

  consoleInfo(info:any) {
    console.log(this.info);
    console.log(info);
  }

  consoleEvent(e:any) {
    console.log(e);
  }
  consoleEventType(e:any) {
    console.log(e.type);
  }
}
