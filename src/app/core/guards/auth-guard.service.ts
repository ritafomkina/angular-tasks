import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuardService {
  constructor(private authService: AuthService) { }

  isLoggedIn = false;

  public canActivate():
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.authService.currentLoginStatus.subscribe((state) => { this.isLoggedIn = state; });
    return this.isLoggedIn;
    // return true;
  }
}
