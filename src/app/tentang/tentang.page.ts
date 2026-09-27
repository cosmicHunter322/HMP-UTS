// roybe mulai dari sini
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  // Gunakan pembaruan tampilan biasa seperti proyek kelas.
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  
  
  
  selector: 'app-tentang',
  templateUrl: './tentang.page.html',
  styleUrls: ['./tentang.page.scss'],
  
})
export class TentangPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// roybe selesai sampai sini
