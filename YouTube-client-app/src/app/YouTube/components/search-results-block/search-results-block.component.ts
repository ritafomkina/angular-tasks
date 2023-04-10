import {
  Component, Input, OnChanges, OnInit,
} from '@angular/core';
import DataService from '../../services/cart-data.service';
import { Card } from '../../models/search-item.model';
import SortingService from '../../services/sorting.service';
import SearchingService from '../../services/searching.service';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent implements OnInit, OnChanges {
  constructor(
    private dataService: DataService,
    private sorting: SortingService,
    private searchingService: SearchingService,
  ) {}

  @Input() sort: string;

  @Input() sortingState: boolean;

  public cards: Card[];

  public value = '';

  ngOnChanges(): void {
    this.value = this.searchingService.value;
    this.cards = this.sort
      ? this.sorting.getSortedDataBy(this.sort, this.sortingState)
      : this.dataService.getData();
  }

  ngOnInit() {
    this.cards = this.dataService.getData();
  }
}
