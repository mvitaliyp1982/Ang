import { Component } from '@angular/core';

@Component({
  selector: 'app-hw01',
  templateUrl: './hw01.component.html',
  styleUrls: ['./hw01.component.css']
})
export class Hw01Component {
  quote:Array<string> = ["Patience is a key element of success", "If you think your teacher is tough, wait till you get boss", "Life is not fair — get used to it!", "Success is a lousy teacher. Це seduces smart people in thinking they can't lose", "Be nice to nerds..."]
  href:Array<string> = ["https://en.wikipedia.org/wiki/Bill_Gates", "https://www.gatesfoundation.org/", "https://www.gatesnotes.com/", "https://twitter.com/billgates"]
}
