import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private userIsLoggedIn = new BehaviorSubject<boolean>(false);

  public currentLoginStatus = this.userIsLoggedIn.asObservable();

  setPassword(token: string, user: string): void {
    localStorage.setItem(token, user);
    this.userIsLoggedIn.next(true);
  }
}
