import {
  HttpClient, HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Card } from '../models/search-item.model';
import { SearchYouTubeResponse } from '../models/search-model';
import { VideoYouTubeResponse } from '../models/video-model';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  private readonly SEARCH_URL = 'search?';

  private readonly VIDEO_URL = 'videos?';

  private readonly LIMIT = 10;

  constructor(private http: HttpClient) {
  }

  card: Card;

  cards: Card[];

  public getData(searchBy: string): Observable<Card[]> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', this.LIMIT.toString())
      .set('q', searchBy);

    return this.http
      .get<SearchYouTubeResponse>(`${this.SEARCH_URL}`, { params })
      .pipe(
        mergeMap((searchResponse: SearchYouTubeResponse) => {
          const cardsIdStr = searchResponse.items.map((item) => item.id.videoId).join(',');
          return this.http
            .get<VideoYouTubeResponse>(`${this.VIDEO_URL}&id=${cardsIdStr}&part=snippet,statistics`)
            .pipe(
              map((videoResponse: VideoYouTubeResponse): Card[] => {
                const cardsList = videoResponse.items;
                this.cards = cardsList.map((item) => {
                  const card: Card = {
                    id: item.id,
                    imgSRC: item.snippet.thumbnails.medium.url,
                    title: item.snippet.title,
                    viewCount: item.statistics.viewCount,
                    likeCount: item.statistics.likeCount,
                    dislikeCount: Math.round(Math.random() * 1000).toString(),
                    commentCount: item.statistics.commentCount,
                    publishedAt: item.snippet.publishedAt,
                    description: item.snippet.description,
                  };
                  return card;
                });
                return this.cards;
                // я сохраняю полученнуе данные в поле сервиса и в др сервисах
                // достаю их из этого поля, а не из подписки.
                // Так как при подписке отправляется новый запрос.
                // Мой подход хороший для перформанса или нет?
              }),
            );
        }),
        catchError((error) => {
          console.log('[ERROR]', error);
          return EMPTY;
        }),
      );
  }

  public get savedCards(): Card[] {
    return this.cards;
  }

  public removeSavedCards(): void {
    this.cards = [];
  }
}
