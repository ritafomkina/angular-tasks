import { Component } from '@angular/core';
import respons from './response.example';
import { Card } from './search-item.model';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export default class SearchResultsBlockComponent {
  public cards = respons.items.map((element) => {
    let card: Card = {
      id: element.id,
      imgURL: element.snippet.thumbnails.default.url,
      title: element.snippet.title,
      viewCount: element.statistics.viewCount,
      likeCount: element.statistics.likeCount,
      dislikeCount: element.statistics.dislikeCount,
      commentCount: element.statistics.commentCount,
    };
    return card;
  }
    )

}
