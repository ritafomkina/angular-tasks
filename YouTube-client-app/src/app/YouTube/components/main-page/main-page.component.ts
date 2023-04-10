import { Component } from '@angular/core';
import SettingBtnControlService from 'src/app/core/services/setting-btn-control.service';
import SortingService from '../../services/sorting.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  constructor(
    public settingBtnControlService: SettingBtnControlService,
    private sortingService: SortingService,
  ) {

  }

  sort: string;

  sortingState = true;

  sortBy(criteria: string) {
    this.sort = criteria;
    this.sortingState = !this.sortingState;
  }

  title = 'YouTube-client-app';
}
