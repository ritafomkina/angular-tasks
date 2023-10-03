import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import AuthService from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export default class LoginInfoComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  userName: string | null;

  authSubscription: Subscription;

  isLoggedIn = false;

  public ngOnInit() {
    this.authSubscription = this.authService.currentLoginStatus.subscribe((state) => {
      if (!state) {
        this.router.navigate(['login']);
      } else {
        this.isLoggedIn = state;
        const storageData = localStorage.getItem('user');
        if (storageData) {
          this.userName = JSON.parse(storageData).login;
        }
      }
    });
  }

  public onLogin() {
    if (this.isLoggedIn) {
      this.authService.logOut();
      this.router.navigate(['login']);
    }
  }

  public openAdminPage() {
    this.router.navigate(['admin']);
  }

  public ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }
}
