import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() showSearchingBlock = new EventEmitter<boolean>();

  @Output() showFilteringBlock = new EventEmitter<boolean>();

  onShowSearchingBlock() {
    this.showSearchingBlock.emit();
  }

  onShowFilteringBlock() {
    this.showFilteringBlock.emit();
  }
}
