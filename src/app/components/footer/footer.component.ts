import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
      private router: Router,
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

}
