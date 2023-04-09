import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuardService {
  constructor(private authService: AuthService) { }

  public canActivate():
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.userIsLoggedIn;
    // return true;
  }
}
