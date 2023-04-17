import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export default class FilteringBlockComponent {
  @Output() sort = new EventEmitter<string>();

  sortBy(criteria: string) {
    this.sort.emit(criteria);
  }
}
