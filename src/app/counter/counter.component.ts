import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;
  incrementInterval: any;
  decrementInterval: any;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  isAboveThree(): boolean {
    return this.count > 3;
  }

  isBelowMinusThree(): boolean {
    return this.count < -3;
  }

  isAboveTwenty(): boolean{
    return this.count > 20;
  }

 isBelowMinusTwenty(): boolean{
    return this.count < -20;
  }

  onIncrementMouseDown() {
    this.increment();
    this.incrementInterval = setInterval(() => {
      this.increment();
    }, 100);
  }

  onDecrementMouseDown() {
    this.decrement();
    this.decrementInterval = setInterval(() => {
      this.decrement();
    }, 100);
  }

  onMouseUp() {
    clearInterval(this.incrementInterval);
    clearInterval(this.decrementInterval);
  }
}