import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  /**
   * Guarda o usuário
   */
  public user: string;

  /**
   * Guarda o usuário
   */
  public password: string;

  ngOnInit() {
  }

  /**
   * Realiza o login
   */
  public async login(): Promise<void> {
    if (this.user == 'teste@email.com' && this.password == '123456')
      await this.router.navigateByUrl('home');
  }

}
