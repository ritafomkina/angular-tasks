import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export default class SettingsButtonComponent {
  @Output() showFilteringBlock = new EventEmitter<boolean>();

  onShowFilteringBlock() {
    this.showFilteringBlock.emit();
  }
}
