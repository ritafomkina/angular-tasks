import { Injectable } from '@angular/core';
import { Card } from '../models/search-item.model';
import respons from './YouTube-response';

@Injectable({
  providedIn: 'root',
})

export default class DataService {
  private cardList = respons.items.map((element) => {
    const card: Card = {
      id: element.id,
      imgURL: element.snippet.thumbnails.medium.url,
      title: element.snippet.title,
      viewCount: element.statistics.viewCount,
      likeCount: element.statistics.likeCount,
      dislikeCount: element.statistics.dislikeCount,
      commentCount: element.statistics.commentCount,
      publishedAt: element.snippet.publishedAt,
    };
    return card;
  });

  public getData(): Card[] {
    return this.cardList;
  }
}
