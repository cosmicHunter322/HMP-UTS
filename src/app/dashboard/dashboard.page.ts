import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  // Gunakan pembaruan tampilan biasa seperti proyek kelas.
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage {
  constructor(
    public productService: ProductService,
    public transactionService: TransactionService
  ) { }

}
