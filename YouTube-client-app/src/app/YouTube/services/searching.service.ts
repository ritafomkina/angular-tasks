import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class SearchingService {
  private messageSource = new BehaviorSubject<string>('');

  public currentMessage = this.messageSource.asObservable();

  public changeMessage(message: string): void {
    this.messageSource.next(message);
  }
}
