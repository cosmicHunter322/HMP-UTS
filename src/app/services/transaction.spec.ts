import { Injectable } from '@angular/core';
import { CartItem } from './cart.service';

export interface Transaction {
  id: string;
  date: Date;
  items: CartItem[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  constructor() { }

  getTransactions() {
    return this.transactions;
  }

  addTransaction(items: CartItem[], total: number) {
    const newTransaction: Transaction = {
      id: 'TRX-' + new Date().getTime(),
      date: new Date(),
      // Salin data barang agar riwayat tidak ikut berubah saat produk diedit.
      items: items.map(item => ({
        product: { ...item.product },
        quantity: item.quantity
      })),
      total: total
    };
    this.transactions.unshift(newTransaction);
  }

  getTodayTotalTransactions(): number {
    const today = new Date().toDateString();
    return this.transactions.filter(t => t.date.toDateString() === today).length;
  }

  getTopSellingProduct(): string {
    const productCount: { [key: string]: number } = {};
    const productNames: { [key: string]: string } = {};
    const today = new Date().toDateString();
    this.transactions.filter(t => t.date.toDateString() === today).forEach(t => {
      t.items.forEach(item => {
        const id = item.product.id;
        if (!productCount[id]) {
          productCount[id] = 0;
        }
        productCount[id] += item.quantity;
        if (!productNames[id]) {
          productNames[id] = item.product.name;
        }
      });
    });

    let topProduct = 'Belum ada';
    let max = 0;
    for (const id in productCount) {
      if (productCount[id] > max) {
        max = productCount[id];
        topProduct = productNames[id];
      }
    }
    return topProduct;
  }
}
