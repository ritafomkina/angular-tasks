import { Component, EventEmitter, Output } from '@angular/core';
import SettingBtnControlService from 'src/app/core/services/setting-btn-control.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export default class SettingsButtonComponent {
  constructor(private settingBtnControlService: SettingBtnControlService) {}

  @Output() showFilteringBlock = new EventEmitter<boolean>();

  public onShowFilteringBlock() {
    this.settingBtnControlService.filters = !this.settingBtnControlService.filters;
    this.showFilteringBlock.emit();
  }
}
