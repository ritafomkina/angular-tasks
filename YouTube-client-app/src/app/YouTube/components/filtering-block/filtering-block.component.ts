import { Component } from '@angular/core';
import FilteringService from '../../services/filtering.service';
import SortingService from '../../services/sorting.service';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export default class FilteringBlockComponent {
  constructor(
    private filteringService: FilteringService,
    private sortingService: SortingService,
  ) {
  }

  public isIncreasing = false;

  public sortBy(criteriaString: string): void {
    this.isIncreasing = !this.isIncreasing;
    const { isIncreasing } = this;
    this.sortingService.sort({ criteriaString, isIncreasing });
  }

  public onSubmit(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.value?.length) {
      return;
    }
    const { value } = input;
    this.filteringService.changeString(value.trim());
  }
}
