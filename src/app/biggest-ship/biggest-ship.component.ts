import { Component } from '@angular/core';

@Component({
  selector: 'app-biggest-ship',
  templateUrl: './biggest-ship.component.html',
  styleUrls: ['./biggest-ship.component.css']
})
export class BiggestShipComponent {
  profile:Array<string> =['../../assets/biggest_ship.jpg', '361', 'Найбільше круїзне судно у світі'];
}
