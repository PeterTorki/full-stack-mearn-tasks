import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.html',
})
export class ProductList {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number | string>();
  @Output() handleFavorites = new EventEmitter<string>();
  @Output() editProduct = new EventEmitter<Product>();

  delete(id: number | string) {
    console.log('delete', id);
    this.deleteProduct.emit(id);
  }

  favorite(name: string) {
    this.handleFavorites.emit(name);
  }

  edit(product: Product) {
    this.editProduct.emit(product);
  }
}
