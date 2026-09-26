import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Product, ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.page.html',
  styleUrls: ['./detail-produk.page.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DetailProdukPage {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastCtrl: ToastController
  ) { }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = id ? this.productService.getProductById(id) : undefined;
  }

  async addToCart() {
    if (!this.product) {
      return;
    }
    const berhasil = this.cartService.addToCart(this.product);
    const toast = await this.toastCtrl.create({
      message: berhasil
        ? `${this.product.name} berhasil ditambahkan ke keranjang!`
        : `Stok ${this.product.name} tidak cukup.`,
      duration: 2000,
      position: 'bottom',
      color: berhasil ? 'success' : 'danger'
    });
    await toast.present();
  }

}
