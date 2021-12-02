import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
      private router: Router,
      readonly alertController: AlertController,
  ) { }

  /**
   * Mostra qual rota esta selecionada
   */
  public pageSelected: boolean[] = [false, false, false];

  ngOnInit() {

    switch (this.router.url) {
      case '/profile':
        this.pageSelected[2] = true;
        break;
      case '/home':
        this.pageSelected[1] = true;
        break;
    }

  }

  public async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Câmera indisponível',
      message: 'Conecte com um alimentador inteligente para usar a camera',
      buttons: ['OK']
    });

    await alert.present();
  }

}
