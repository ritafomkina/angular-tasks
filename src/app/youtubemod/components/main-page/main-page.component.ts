import { Component } from '@angular/core';
import SettingBtnControlService from 'src/app/core/services/setting-btn-control.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  constructor(
    public settingBtnControlService: SettingBtnControlService,
  ) {
  }

  title = 'YouTube-client-app';
}
