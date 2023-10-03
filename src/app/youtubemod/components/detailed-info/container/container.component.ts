import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/youtubemod/models/search-item.model';
import DataService from 'src/app/youtubemod/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export default class ContainerComponent implements OnInit {
  public card: Card;

  constructor(
    public route: ActivatedRoute,
    private dataServise: DataService,
    private location: Location,
  ) {}

  public cards: Card[];

  public ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.card = this.dataServise.savedCards.find((card) => card.id === params.id)!;
      },
    );
  }

  public goBack() {
    this.location.back();
  }
}
