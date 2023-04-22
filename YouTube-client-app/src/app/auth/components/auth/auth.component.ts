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

  public ngOnInit() {
    this.authForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\]])/)]],
    });
  }

  public get login() {
    return this.authForm.controls.login as FormControl;
  }

  public get password() {
    return this.authForm.controls.password as FormControl;
  }

  // eslint-disable-next-line class-methods-use-this
  public isTouched(formControlName: FormControl): boolean {
    const state = formControlName.dirty || formControlName.touched;
    return state;
  }

  public onSubmit(): void {
    if (this.authForm.value.login && this.authForm.value.password) {
      this.authService.logIn(JSON.stringify(this.authForm.value));
      this.router.navigateByUrl('/main');
    }
  }
}
