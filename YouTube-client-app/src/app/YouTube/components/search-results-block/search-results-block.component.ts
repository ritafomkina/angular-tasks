import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Card } from '../../models/search-item.model';
import SearchingService from '../../services/searching.service';
import DataService from '../../services/data.service';
import SortingService from '../../services/sorting.service';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent implements OnChanges, OnDestroy {
  constructor(
    public dataService: DataService,
    private sorting: SortingService,
    private searchingService: SearchingService,
  ) {}

  @Input() sortCriteria: string;

  @Input() isSortingApplied: boolean;

  public cards: Card[];

  searchSubscription: Subscription;

  ngOnChanges(): void {
    this.searchSubscription = this.searchingService.currentMessage
      .pipe(
        debounceTime(1000),
      )
      .subscribe((message) => {
        if (message.length >= 3) {
          this.getCards(message);
        }
      });
  }

  public ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

  getCards(message: string): void {
    this.dataService.getData(message)
      .subscribe((items) => {
        this.dataService.cards = items;
      });
    this.sortCards(this.dataService.cards);
  }

  sortCards(items: Card[]) {
    this.cards = this.sortCriteria
      ? this.sorting.getSortedDataBy(this.sortCriteria, this.isSortingApplied)
      : items;
  }
}
