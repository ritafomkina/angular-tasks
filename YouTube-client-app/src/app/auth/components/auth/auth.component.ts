import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  value = '';

  authForm = this.formBuilder.group({
    login: '',
    password: '',
  });

  onSubmit(): void {
    if (this.authForm.value.login && this.authForm.value.password) {
      localStorage.setItem('user', JSON.stringify(this.authForm.value));
      this.authService.userIsLoggedIn = true;
      this.router.navigateByUrl('main');
    }
  }
}
