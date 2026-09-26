import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  buyPrice: number;
  sellPrice: number;
  stock: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 'p1', name: 'Beras Mentik 5kg', buyPrice: 50000, sellPrice: 60000, stock: 20, category: 'Sembako', imageUrl: 'https://picsum.photos/seed/beras/300/300' },
    { id: 'p2', name: 'Gula Pasir 1kg', buyPrice: 12000, sellPrice: 15000, stock: 50, category: 'Sembako', imageUrl: 'https://picsum.photos/seed/gula/300/300' },
    { id: 'p3', name: 'Minyak Goreng 2L', buyPrice: 28000, sellPrice: 32000, stock: 15, category: 'Sembako', imageUrl: 'https://picsum.photos/seed/minyak/300/300' },
    { id: 'p4', name: 'Telur Ayam 1kg', buyPrice: 22000, sellPrice: 26000, stock: 0, category: 'Sembako', imageUrl: 'https://picsum.photos/seed/telur/300/300' },
    { id: 'p5', name: 'Kopi Kapal Api', buyPrice: 10000, sellPrice: 12500, stock: 40, category: 'Minuman', imageUrl: 'https://picsum.photos/seed/kopi/300/300' },
    { id: 'p6', name: 'Teh Celup Sariwangi', buyPrice: 5000, sellPrice: 7000, stock: 35, category: 'Minuman', imageUrl: 'https://picsum.photos/seed/teh/300/300' },
    { id: 'p7', name: 'Sabun Mandi Lifebuoy', buyPrice: 3000, sellPrice: 4500, stock: 60, category: 'Kebersihan', imageUrl: 'https://picsum.photos/seed/sabun/300/300' },
    { id: 'p8', name: 'Shampo Clear 170ml', buyPrice: 18000, sellPrice: 22000, stock: 25, category: 'Kebersihan', imageUrl: 'https://picsum.photos/seed/shampo/300/300' },
    { id: 'p9', name: 'Pasta Gigi Pepsodent', buyPrice: 8000, sellPrice: 10000, stock: 30, category: 'Kebersihan', imageUrl: 'https://picsum.photos/seed/odol/300/300' },
    { id: 'p10', name: 'Indomie Goreng', buyPrice: 2500, sellPrice: 3500, stock: 100, category: 'Makanan', imageUrl: 'https://picsum.photos/seed/indomie/300/300' },
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product) {
    const product = this.getProductById(updatedProduct.id);
    if (product) {
      product.name = updatedProduct.name;
      product.buyPrice = updatedProduct.buyPrice;
      product.sellPrice = updatedProduct.sellPrice;
      product.stock = updatedProduct.stock;
      product.category = updatedProduct.category;
      product.imageUrl = updatedProduct.imageUrl;
    }
  }

  updateStock(id: string, qty: number): boolean {
    const product = this.getProductById(id);
    if (!product || !Number.isInteger(qty) || qty <= 0 || product.stock < qty) {
      return false;
    }
    product.stock -= qty;
    return true;
  }

  getTotalProducts(): number {
    return this.products.length;
  }
}