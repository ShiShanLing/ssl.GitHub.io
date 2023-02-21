import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor() {
  }

  count = 0;



  addOne() {
    this.count++;
  }

  addTwo() {
    this.count+=2;
  }

  minusOne() {
    this.count--;
  }

  minusTwo() {
    this.count-=2;
  }

}
