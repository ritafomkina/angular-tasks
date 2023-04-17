import { Component, Input } from '@angular/core';
// import GetDataService from 'src/app/YouTube/services/get-data.service';
import { Card } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})

export default class SearchResultItemComponent {
  // constructor(public data: GetDataService) {}

  @Input() card: Card;

  // cards = this.data.getData().subscribe({ next: (data) => console.log(data) });
}
