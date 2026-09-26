import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { ProductService, Product } from '../services/product.service';

@Component({
  // Gunakan pembaruan tampilan biasa seperti proyek kelas.
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false,
})
export class TambahProdukPage implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, this.validateName]],
      buyPrice: ['', [Validators.required, this.validatePrice]],
      sellPrice: ['', [Validators.required, this.validatePrice]],
      stock: ['', [Validators.required, this.validateStock]],
      category: [''],
      imageUrl: ['']
    });
  }

  ionViewDidEnter() {
    const formElement = document.querySelector('.fade-in-anim') as HTMLElement;
    if (formElement) {
      const animation = this.animationCtrl.create()
        .addElement(formElement)
        .duration(800)
        .easing('ease-in-out')
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(10px)' },
          { offset: 1, opacity: '1', transform: 'translateY(0)' }
        ]);
      animation.play();
    }
  }

  saveProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: 'p' + new Date().getTime(),
        name: this.productForm.value.name.trim(),
        buyPrice: Number(this.productForm.value.buyPrice),
        sellPrice: Number(this.productForm.value.sellPrice),
        stock: Number(this.productForm.value.stock),
        category: this.productForm.value.category || 'Lainnya',
        imageUrl: this.productForm.value.imageUrl || ''
      };
      this.productService.addProduct(newProduct);
      this.router.navigate(['/tabs/produk']);
    } else {
      this.productForm.markAllAsTouched();
    }
  }

   // Reactive Form diwajibkan soal UTS. Validasi memakai kondisi biasa.
  validateName(control: AbstractControl) {
    if (String(control.value || '').trim() === '') {
      return { required: true };
    }
    return null;
  }

  validatePrice(control: AbstractControl) {
    if (control.value === '' || control.value === null) {
      return { required: true };
    }
    const price = Number(control.value);
    if (!Number.isFinite(price) || price <= 0) {
      return { invalidPrice: true };
    }
    return null;
  }

  validateStock(control: AbstractControl) {
    if (control.value === '' || control.value === null) {
      return { required: true };
    }
    const stock = Number(control.value);
    if (!Number.isInteger(stock) || stock < 0) {
      return { invalidStock: true };
    }
    return null;
  }
}