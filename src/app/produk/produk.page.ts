import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Product, ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
})
export class ProdukPage implements OnInit {

  products: Product[] = [];
  searchQuery: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  ionViewWillEnter() {
    this.products = this.productService.getProducts();
  }

  get filteredProducts() {
    if (!this.searchQuery) {
      return this.products;
    }
    return this.products.filter(p => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  goToDetail(id: string) {
    this.router.navigate(['/detail-produk', id]);
  }

  async addToCart(product: Product) {
    const berhasil = this.cartService.addToCart(product);
    const toast = await this.toastCtrl.create({
      message: berhasil
        ? `${product.name} berhasil ditambahkan ke keranjang!`
        : `Stok ${product.name} tidak cukup.`,
      duration: 2000,
      position: 'bottom',
      color: berhasil ? 'success' : 'danger'
    });
    await toast.present();
  }


}
