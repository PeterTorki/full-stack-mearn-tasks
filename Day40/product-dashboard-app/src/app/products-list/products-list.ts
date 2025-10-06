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
  selector: 'app-products-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.html',
})
export class ProductsList {
  @Input() products: Product[] = [];

  @Output() deleteProduct = new EventEmitter<{
    id: number | string;
    name: string;
  }>();
  @Output() handleFavorites = new EventEmitter<string>();
  @Output() editProduct = new EventEmitter<Product>();

  delete({ id, name }: { id: number | string; name: string }) {
    this.deleteProduct.emit({ id, name });
  }

  favorite(name: string) {
    this.handleFavorites.emit(name);
  }

  edit(product: Product) {
    console.log('edit', product);
    this.editProduct.emit(product);
  }
}
