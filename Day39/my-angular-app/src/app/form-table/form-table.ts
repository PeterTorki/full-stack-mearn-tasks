import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form-table.html',
})
export class FormTable {
  name: string = '';
  email: string = '';

  formEmail: string = '';
  formName: string = '';

  onChange(inputElement: HTMLInputElement) {
    console.log(inputElement.value);
    if (inputElement.name === 'name') {
      this.name = inputElement.value;
    }
    if (inputElement.name === 'email') {
      this.email = inputElement.value;
    }
  }

  submit() {
    this.formEmail = this.email;
    this.formName = this.name;
  }
}
