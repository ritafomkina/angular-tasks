import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'YouTube-client-app';

  search = false;

  filters = true;

  onShowSearchingBlock() {
    this.search = true;
  }

  onShowFilteringBlock() {
    this.filters = !this.filters;
  }
}
