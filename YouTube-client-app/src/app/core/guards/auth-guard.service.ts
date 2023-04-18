import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuardService {
  constructor(private authService: AuthService) { }

  status = false;

  public canActivate():
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.authService.currentLoginStatus.subscribe((status) => { this.status = status; });
    return this.status;
    // return true;
  }
}
