import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private userIsLoggedIn = new BehaviorSubject<boolean>(false);

  public currentLoginStatus = this.userIsLoggedIn.asObservable();

  private token = 'user';

  public logIn(user: string): void {
    localStorage.setItem(this.token, user);
    this.userIsLoggedIn.next(true);
  }

  public logOut(): void {
    localStorage.removeItem(this.token);
  }
}
