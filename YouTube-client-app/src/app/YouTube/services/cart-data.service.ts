import { Injectable } from '@angular/core';
import { Card } from '../models/search-item.model';
import ResponseService from './response.service';

@Injectable({
  providedIn: 'root',
})

export default class DataService {
  constructor(private responseService: ResponseService) {}

  private cardList = this.responseService.response.items.map((element) => {
    const card: Card = {
      id: element.id,
      imgSRC: element.snippet.thumbnails.medium.url,
      title: element.snippet.title,
      viewCount: element.statistics.viewCount,
      likeCount: element.statistics.likeCount,
      dislikeCount: element.statistics.dislikeCount,
      commentCount: element.statistics.commentCount,
      publishedAt: element.snippet.publishedAt,
      description: element.snippet.description,
    };
    return card;
  });

  public getData(): Card[] {
    return this.cardList;
  }
}
