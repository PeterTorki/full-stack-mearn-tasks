import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Output() sendDataChild = new EventEmitter<string[]>();
  arr = ['kk', ' kk', ' kk'];
  sendData() {
    this.sendDataChild.emit(this.arr);
  }
}
