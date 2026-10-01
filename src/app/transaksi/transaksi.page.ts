import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  // Gunakan pembaruan tampilan biasa seperti proyek kelas.
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
})
export class TransaksiPage {
  constructor(public transactionService: TransactionService) { }
}
