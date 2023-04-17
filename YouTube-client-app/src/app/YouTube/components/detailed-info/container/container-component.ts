import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/YouTube/models/search-item.model';

@Component({
  selector: 'app-container',
  templateUrl: './container-component.html',
  styleUrls: ['./container-component.scss'],
})
export default class ContainerComponent implements OnInit {
  public card: Card;

  constructor(
    public route: ActivatedRoute,
  ) {}

  public cards: Card[];

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.card = this.cards.find((card) => card.id === params.id)!;
      },
    );
  }
}
