import { Component } from '@angular/core';

@Component({
  selector: 'app-hw02',
  templateUrl: './hw02.component.html',
  styleUrls: ['./hw02.component.css']
})
export class Hw02Component {
  profile:Array<string> =["01.06.1982", "+380673722498", "mvitaliyp1982@gmail.com", "Хмельницький", "Мединський В.П."]
  // number:string = "+380673722498"
  work:Array<string> = [`МКП "Хмельницькводоканал" - 2004-2006`, `ТОВ "Карат" - 2006-по даний час`, `ще не придумав чим би похвалитись`]
  social:Array<string> = ["https://www.facebook.com/profile.php?id=100006269657922", "https://www.instagram.com/vitalii_medynskyi/"]
}
