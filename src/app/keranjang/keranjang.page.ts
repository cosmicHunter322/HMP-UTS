import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { CartService, CartItem } from '../services/cart.service';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
})
export class KeranjangPage implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private transactionService: TransactionService,
    private productService: ProductService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loadCart();
  }

  ionViewWillEnter() {
    this.loadCart();
  }
  
  ionViewDidEnter() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = [...this.cartService.getCart()];
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  async checkout() {
    this.loadCart();
    if (this.cartItems.length === 0) {
      return;
    }

    const alert = await this.alertCtrl.create({
      header: 'Konfirmasi',
      message: 'Apakah Anda yakin ingin memproses transaksi ini?',
      buttons: [
        { text: 'Batal', role: 'cancel' },
        { text: 'Proses', role: 'confirm' }
      ]
    });
    await alert.present();

    const result = await alert.onDidDismiss();
    if (result.role !== 'confirm') {
      return;
    }

    this.loadCart();
    if (this.cartItems.length === 0) {
      return;
    }

    for (const item of this.cartItems) {
      const product = this.productService.getProductById(item.product.id);
      if (!product || product.stock < item.quantity) {
        const toast = await this.toastCtrl.create({
          message: 'Stok ' + item.product.name + ' tidak cukup. Periksa keranjang kembali.',
          duration: 2500,
          position: 'top',
          color: 'danger'
        });
        await toast.present();
        return;
      }
    }

    this.transactionService.addTransaction(this.cartItems, this.totalPrice);
    for (const item of this.cartItems) {
      this.productService.updateStock(item.product.id, item.quantity);
    }
    this.cartService.clearCart();
    this.loadCart();

    const toast = await this.toastCtrl.create({
      message: 'Transaksi Berhasil Disimpan!',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
    this.router.navigate(['/tabs/transaksi']);
  }
}
