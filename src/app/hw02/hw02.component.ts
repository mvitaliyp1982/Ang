import { Component } from '@angular/core';

@Component({
  selector: 'app-hw02',
  templateUrl: './hw02.component.html',
  styleUrls: ['./hw02.component.css']
})
export class Hw02Component {
  Date1:string = "01.06.1982"
  number:string = "+380673722498"
  email:string = "mvitaliyp1982@gmail.com"
  city:string = "Хмельницький"
  PIB:string = "Мединський В.П."
  work1:string = `МКП "Хмельницькводоканал" - 2004-2006`
  work2:string = `ТОВ "Карат" - 2006-по даний час`
  work3:string = `ще не придумав чим би похвалитись`
  social1:string = `fb: www.facebook.com/profile.php?id=100006269657922`
  social2:string = `instagram: @vitalii_medynskyi`
}
