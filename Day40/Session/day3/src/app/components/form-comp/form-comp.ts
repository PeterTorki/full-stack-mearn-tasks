import { Component, EventEmitter, Output } from '@angular/core';
import { user } from '../../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  imports: [FormsModule],
  templateUrl: './form-comp.html',
  styleUrl: './form-comp.css',
})
export class FormComp {
  // data -> event
  @Output() sendDataEvent = new EventEmitter<user[]>();
  id: number | string = '';
  name: string = '';
  age: string = '';
  userObj: user = { id: '', name: '', age: '' };
  usersArr: user[] = [];
  isChecked: 'initial' | 'added' | 'err' = 'initial';
  addUser() {
    if (this.name && this.age) {
      this.userObj = { id: this.usersArr.length + 1, name: this.name, age: this.age };
      this.usersArr.push(this.userObj);
      this.name = '';
      this.age = '';
      this.isChecked = 'added';
      // inside emit send data
      this.sendDataEvent.emit(this.usersArr);
    } else {
      this.isChecked = 'err';
    }
  }
}
