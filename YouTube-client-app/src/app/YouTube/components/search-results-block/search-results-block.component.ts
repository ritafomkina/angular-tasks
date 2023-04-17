import { Component, Input, OnChanges } from '@angular/core';
import { Card } from '../../models/search-item.model';
import SearchingService from '../../services/searching.service';
import DataService from '../../services/data.service';
import SortingService from '../../services/sorting.service';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent implements OnChanges {
  constructor(
    public dataService: DataService,
    private sorting: SortingService,
    private searchingService: SearchingService,
  ) {}

  @Input() sortCriteria: string;

  @Input() isSortingApplied: boolean;

  public cards: Card[];

  ngOnChanges(): void {
    this.searchingService.currentMessage.subscribe((message) => {
      if (message.length >= 3) {
        this.getCards(message);
      }
    });
  }

  getCards(message: string): void {
    this.dataService.getData(message)
      .subscribe((items) => {
        this.dataService.cards = items;// сохраню полyченные карточки в сервисе,
        // чтобы потом другие компоненты не делали http запрос, а получали из сервиса
      });
    this.sortCards(this.dataService.cards);
  }

  sortCards(items: Card[]) {
    this.cards = this.sortCriteria
      ? this.sorting.getSortedDataBy(this.sortCriteria, this.isSortingApplied)
      : items;
  }
}
