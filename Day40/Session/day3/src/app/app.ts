import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComp } from './components/table-comp/table-comp';
import { user } from './types';
import { FormComp } from './components/form-comp/form-comp';
import { Child } from './components/child/child';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, TableComp, FormComp, Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // id: number | string = '';
  // name: string = '';
  // age: string = '';
  // userObj: user = { id: '', name: '', age: '' };
  usersArr: user[] = [];
  // isChecked: 'initial' | 'added' | 'err' = 'initial';
  // addUser() {
  //   if (this.name && this.age) {
  //     this.userObj = { id: this.usersArr.length + 1, name: this.name, age: this.age };
  //     this.usersArr.push(this.userObj);
  //     this.name = '';
  //     this.age = '';
  //     this.isChecked = 'added';
  //     console.log(this.usersArr);
  //   } else {
  //     this.isChecked = 'err';
  //   }
  // }
  // setKey(index: number, user: user) {
  //   return user.id;
  // }

  recieveData(users: user[]) {
    this.usersArr = users;
    console.log(this.usersArr);
  }
  recieveChild(data: string[]) {
    console.log(data);
  }
}

// Directives -> Class (Attr) -> add behavior or modify in template
//    -> component directive -> class decorated with @Component -> template , selector , logic , interact with another comp or Dom
//    -> attribute directive
//                 -> ngModel
//                 -> ngClass -> add ot remove multibule classes -> condation -> {} , [] , '' -> need module (CommonModule)
//                 --- [class] -> support simple way -> [class.name]='isActive' -> there is no need to import module
//                 -> ngStyle -> set inline styles -> ngStyle -> need module
//                 --- [style] -> style.font-size.px="20" -> does not need module
//    -> structure directive (deprecated) (removing v22)
//                 -> ngFor
//                 -> ngIF
//                 -> ngSwitch (doc) -> (selfstudt) -> task
//                 - ngTemplate -> container for html code -> will be rendered based condition or instructions
// control flow -> @for , @if , @switch
