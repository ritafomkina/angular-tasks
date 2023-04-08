import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  // @Input()
  title = 'YouTube-client-app';

  search = true;

  filters = true;

  onShowSearchingBlock() {
    this.search = true;
  }

  onShowFilteringBlock() {
    this.filters = !this.filters;
  }
}
