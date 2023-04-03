import { Component, Input } from '@angular/core';
import { Card } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})

export default class SearchResultItemComponent {
  @Input() card: Card;
}
