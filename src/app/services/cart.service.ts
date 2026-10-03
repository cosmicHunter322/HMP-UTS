import { Injectable } from '@angular/core';
import { Product, ProductService } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor(private productService: ProductService) { }

  getCart() {
    return this.cart;
  }

  addToCart(product: Product): boolean {
    const currentProduct = this.productService.getProductById(product.id);
    if (!currentProduct || currentProduct.stock <= 0) {
      return false;
    }

    const existing = this.cart.find(item => item.product.id === product.id);
    if (existing) {
      if (existing.quantity >= currentProduct.stock) {
        return false;
      }
      existing.quantity += 1;
    } else {
      this.cart.push({ product: currentProduct, quantity: 1 });
    }
    return true;
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.product.sellPrice * item.quantity), 0);
  }

  clearCart() {
    this.cart = [];
  }
}
