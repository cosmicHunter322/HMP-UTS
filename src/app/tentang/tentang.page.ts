import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
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