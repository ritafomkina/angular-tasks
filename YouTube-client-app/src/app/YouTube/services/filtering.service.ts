import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/search-item.model';
import DataService from './data.service';

@Injectable({
  providedIn: 'root',
})
export default class FilteringService {
  constructor(private dataService: DataService) {}

  private filterStringSource = new BehaviorSubject<string>('');

  public filterString = this.filterStringSource.asObservable();

  changeString(string: string): void {
    this.filterStringSource.next(string);
  }

  filter(term: string): Card[] {
    return this.dataService.savedCards.filter(
      (card) => card.title.toLowerCase().includes(term.toLowerCase()),
    );
  }
}
