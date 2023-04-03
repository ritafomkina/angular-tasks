import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/services/cart-data.service';
import { Card } from '../../models/search-item.model';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
  providers: [DataService],
})
export default class SearchResultsBlockComponent implements OnInit {
  public cards: Card[];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.cards = this.data.getData();
  }
}
