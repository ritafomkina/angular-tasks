import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../models/search-item.model';
import DataService from '../../services/cart-data.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export default class DetailedInfoComponent implements OnInit {

  public card: Card;

  constructor(
    public route: ActivatedRoute,
    private dataService: DataService,
    ) {}


  public cards: Card[] = this.dataService.getData();

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.card = this.cards.find((card) => card.id === params.id)!;
      },
    );
    // this.CardID = this.route.snapshot.params.id;
    // const selectedCard = this.cards.filter((card) => card.id === this.CardID);
    // // some problem with find and ts
    // [this.card] = selectedCard;
  }
}