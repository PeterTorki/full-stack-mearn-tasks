import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsList } from '../../components/products-list/products-list';
import { ProductEdit } from '../../components/product-edit/product-edit';
import { ProductForm } from '../../components/product-form/product-form';

type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ProductsList, ProductEdit, ProductForm],
  templateUrl: './profile.html',
  styles: ``,
})
export class Profile {
  products: Product[] = [];

  favoriteProducts: string[] = [];
  productToEdit?: Product;

  addProduct(product: Product) {
    this.products.push({ ...product, id: Date.now() });
  }

  deleteProduct(event: { id: number | string; name: string }) {
    console.log('delete in app', event);
    this.products = this.products.filter((p) => p.id !== event.id);
    console.log(this.favoriteProducts);
    if (this.favoriteProducts.includes(event.name)) {
      console.log('remove from favorites');
      this.favoriteProducts = this.favoriteProducts.filter((n) => n !== event.name);
    }
  }

  toggleFavorites(name: string) {
    if (this.favoriteProducts.includes(name)) {
      this.favoriteProducts = this.favoriteProducts.filter((n) => n !== name);
    } else {
      this.favoriteProducts = [...this.favoriteProducts, name];
    }
  }

  startEdit(product: Product) {
    this.productToEdit = { ...product };
  }

  updateProduct(updatedProduct: Product) {
    this.products = this.products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
    this.productToEdit = undefined;
  }

  cancelEdit() {
    this.productToEdit = undefined;
  }
}
