import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../services/product.service';

@Component({
  // Gunakan pembaruan tampilan biasa seperti proyek kelas.
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  
  
  
  selector: 'app-edit-produk',
  templateUrl: './edit-produk.page.html',
  styleUrls: ['./edit-produk.page.scss'],
})
export class EditProdukPage implements OnInit {
  productForm!: FormGroup;
  productId: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
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

    this.productId = this.route.snapshot.paramMap.get('id') || '';
    const product = this.productService.getProductById(this.productId);
    
    if (product) {
      this.productForm.patchValue({
        name: product.name,
        buyPrice: product.buyPrice,
        sellPrice: product.sellPrice,
        stock: product.stock,
        category: product.category,
        imageUrl: product.imageUrl
      });
    }
  }

  updateProduct() {
    if (this.productForm.valid) {
      const existingProduct = this.productService.getProductById(this.productId);
      if (!existingProduct) {
        return;
      }
      const updatedProduct: Product = {
        id: this.productId,
        name: this.productForm.value.name.trim(),
        buyPrice: Number(this.productForm.value.buyPrice),
        sellPrice: Number(this.productForm.value.sellPrice),
        stock: Number(this.productForm.value.stock),
        category: this.productForm.value.category || 'Lainnya',
        imageUrl: this.productForm.value.imageUrl || ''
      };
      this.productService.updateProduct(updatedProduct);
      this.router.navigate(['/detail-produk', this.productId]);
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