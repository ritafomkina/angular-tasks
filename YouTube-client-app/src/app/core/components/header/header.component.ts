import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() showFilteringBlock = new EventEmitter<boolean>();

  public onShowFilteringBlock() {
    this.showFilteringBlock.emit();
  }
}
