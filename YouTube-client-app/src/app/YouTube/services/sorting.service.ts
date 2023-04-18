import { Injectable } from '@angular/core';
import { Card } from '../models/search-item.model';
import DataService from './data.service';

@Injectable({
  providedIn: 'root',
})
export default class SortingService {
  constructor(private dataService: DataService) { }

  private cards: Card[];

  private sortCards(criteria: string, state: boolean): Card[] {
    this.cards = this.dataService.savedCards;
    if (this.cards.length) {
      if (criteria === 'date') {
        return state
          ? this.cards.sort(
            (c1: Card, c2: Card) => Date.parse(c1.publishedAt) - Date.parse(c2.publishedAt),
          )
          : this.cards.sort(
            (c1: Card, c2: Card) => Date.parse(c2.publishedAt) - Date.parse(c1.publishedAt),
          );
      }
      if (criteria === 'views') {
        return state
          ? this.cards.sort(
            (card1: Card, card2: Card) => +card1.viewCount - +card2.viewCount,
          )
          : this.cards.sort(
            (card1: Card, card2: Card) => +card2.viewCount - +card1.viewCount,
          );
      }
      if (criteria === 'word') {
        return this.cards.filter(
          (card) => card.title.includes(criteria.toLowerCase()),
        );
      }
    }
    return this.cards;
  }

  public getSortedDataBy(criteria: string, state:boolean):Card[] {
    return this.sortCards(criteria, state);
  }
}
