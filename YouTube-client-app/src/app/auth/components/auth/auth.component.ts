import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent implements OnInit {
  public authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  value = '';

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\]])/)]],
    });
  }

  get login() {
    return this.authForm.controls.login as FormControl;
  }

  get password() {
    return this.authForm.controls.password as FormControl;
  }

  public loginIsFocused = true;

  public passwordIsFocused = true;

  onSubmit(): void {
    if (this.authForm.value.login && this.authForm.value.password) {
      this.authService.setPassword('user', JSON.stringify(this.authForm.value));
      this.router.navigateByUrl('/main');
    }
  }
}
