import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searching-area',
  templateUrl: './searching-area.component.html',
  styleUrls: ['./searching-area.component.scss'],
})
export default class SearchingAreaComponent {
  // public search: boolean = false;
  @Output() showSearchingBlock = new EventEmitter<boolean>();

  onShowSearchingBlock() {
    this.showSearchingBlock.emit();
  }
}
