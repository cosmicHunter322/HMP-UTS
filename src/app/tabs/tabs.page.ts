import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // Gunakan pembaruan tampilan biasa seperti proyek kelas.
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  
  
  
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  
})
export class TabsPage {

  constructor() {}

}