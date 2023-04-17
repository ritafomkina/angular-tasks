import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  userIsLoggedIn = false;

  setPassword(token: string, user: string): void {
    localStorage.setItem(token, user);
    this.userIsLoggedIn = true;
  }
}
