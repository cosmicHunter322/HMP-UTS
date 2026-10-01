import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction, TransactionService } from '../services/transaction.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.page.html',
  styleUrls: ['./detail-transaksi.page.scss'],
})
export class DetailTransaksiPage implements OnInit {
  transaction: Transaction | undefined;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transaction = this.transactionService.getTransactions().find(t => t.id === id);
    }
  }
}








