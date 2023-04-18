import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export default class LoginInfoComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  public login() {
    this.authService.currentLoginStatus.subscribe((status) => {
      if (!status) {
        this.router.navigate(['login']);
      }
    });
  }
}
