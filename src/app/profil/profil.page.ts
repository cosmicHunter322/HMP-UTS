import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  // Gunakan pembaruan tampilan biasa seperti proyek kelas.
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  fadeInAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    if (!avatarElement) return;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(5000)
      .iterations(3)
      .keyframes([
        { offset: 0, opacity: '0' },
        { offset: 0.2, opacity: '0.2' },
        { offset: 0.4, opacity: '0.4' },
        { offset: 0.6, opacity: '0.6' },
        { offset: 0.8, opacity: '0.8' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }

  rotateAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    if (!avatarElement) return;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(5000)
      .iterations(3)
      .keyframes([
        { offset: 0, transform: 'rotate(0deg)' },
        { offset: 1, transform: 'rotate(360deg)' },
      ]);
    animation.play();
  }

  scaleAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    if (!avatarElement) return;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(5000)
      .iterations(3)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);
    animation.play();
  }

  ionViewDidEnter() {
    this.scaleAvatar();
  }
}
