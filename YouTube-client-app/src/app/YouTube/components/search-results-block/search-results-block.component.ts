import { Component, Input, OnChanges } from '@angular/core';
// import DataService from '../../services/cart-data.service';
import { Card } from '../../models/search-item.model';
// import SortingService from '../../services/sorting.service';
import SearchingService from '../../services/searching.service';
import DataService from '../../services/get-data.service';
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

  @Input() sort: string;

  @Input() sortingState: boolean;

  public cards: Card[];

  ngOnChanges(): void {
    this.searchingService.currentMessage.subscribe((message) => {
      if (message.length >= 3) {
        this.dataService.getData('кот')
          .subscribe((items) => {
            this.dataService.cards = items;// сохраню полченные карточки в сервисе,
            // чтобы потом другие компоненты не делали http запрос, а получали из сервиса
            this.cards = this.sort
              ? this.sorting.getSortedDataBy(this.sort, this.sortingState)
              : items;
            console.log(items);
          });
      }
    });
  }
}
