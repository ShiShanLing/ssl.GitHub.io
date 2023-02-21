import { Component } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent {

  runCallback(callback:(str:string)=>string):string{
      return callback("123");
  }

}
