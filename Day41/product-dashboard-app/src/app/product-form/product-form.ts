import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
})
export class ProductForm {
  @Output() productAdded = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    if (this.productForm.valid) {
      let product: Product = {
        id: Date.now(),
        name: this.productForm.value['name']!,
        price: this.productForm.value['price']!,
        category: this.productForm.value['category']!,
      };
      this.productAdded.emit(product);
    }
  }

  name: string = '';
  price: number = 0;
  category: string = '';

  addProduct() {
    if (this.name && this.price > 0 && this.category) {
      this.productAdded.emit({
        id: Date.now(),
        name: this.name,
        price: this.price,
        category: this.category,
      });
      this.name = '';
      this.price = 0;
      this.category = '';
    }
  }
}
