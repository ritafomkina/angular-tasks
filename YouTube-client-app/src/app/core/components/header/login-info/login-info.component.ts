import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export default class LoginInfoComponent {
  constructor(private router: Router) {}

  public login() {
    this.router.navigate(['login']);
  }
}
