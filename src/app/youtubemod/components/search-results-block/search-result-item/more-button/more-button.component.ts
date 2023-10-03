import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/youtubemod/models/search-item.model';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss'],
})

export default class MoreButtonComponent {
  constructor(
    private router: Router,
  ) {}

  @Input() card: Card;

  public openDetailInfo() {
    this.router.navigate(['main/video', this.card.id]);
  }
}
