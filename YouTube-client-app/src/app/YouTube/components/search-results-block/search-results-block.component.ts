import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { Card } from '../../models/search-item.model';
import SearchingService from '../../services/searching.service';
import DataService from '../../services/data.service';
import SortingService from '../../services/sorting.service';
import FilteringService from '../../services/filtering.service';
import { SortingCriteria } from '../../models/sorting-criteria.model';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent implements OnDestroy, OnInit {
  constructor(
    public dataService: DataService,
    private sortingService: SortingService,
    private searchingService: SearchingService,
    private filteringService: FilteringService,
  ) {}

  public cards: Card[];

  private dataSubscription: Subscription;

  private searchSubscription: Subscription;

  private sortingSubscription: Subscription;

  private filterSubscription: Subscription;

  public ngOnInit(): void {
    this.searchSubscription = this.searchingService.currentMessage
      .pipe(
        filter((message: string) => message.length >= 3),
        debounceTime(1000),
      )
      .subscribe((message) => {
        this.getCards(message);
      });
    this.filterCards();
  }

  public ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
    this.dataSubscription?.unsubscribe();
    this.sortingSubscription?.unsubscribe();
    this.filterSubscription?.unsubscribe();
  }

  private getCards(message: string): void {
    this.dataService.getData(message)
      .subscribe(() => {
        this.cards = this.dataService.savedCards;
        this.sortingSubscription = this.sortCards();
        this.filterSubscription = this.filterCards();
      });
  }

  private sortCards(): Subscription {
    return this.sortingService.sortingCriteria.subscribe((sortingCriteria: SortingCriteria) => {
      if (sortingCriteria.criteriaString) {
        this.sortingService.getSortedDataBy(
          sortingCriteria.criteriaString,
          sortingCriteria.isIncreasing,
        );
      }
    });
  }

  private filterCards(): Subscription {
    return this.filteringService.filterString.subscribe((string) => {
      if (string) {
        this.cards = this.filteringService.filter(string);
      }
    });
  }
}
