import {
  HttpClient, HttpErrorResponse, HttpHeaders, HttpParams,
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
  constructor(private http: HttpClient) {
  }

  private readonly key = 'AIzaSyDM-QM_xNmTJ7LdWMylnN3VxQdBfDVWAsc';

  private readonly SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?';

  private readonly VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos?';

  // searchVideo(term: string): Observable<YouTubeResponse[]>{

  //   const params = new HttpParams({fromString: 'name=term'});
  //     return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
  //  }

  // data: YouTubeResponse;

  card: Card;

  cards: Card[];

  public getData(searchBy: string): Observable<Card[]> {
    // const headers = new HttpHeaders()
    //   .set('key', this.key);

    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('q', searchBy);

    return this.http
      .get<SearchYouTubeResponse>(`${this.SEARCH_URL}key=${this.key}`, { params })
      .pipe(
        map((response) => response.items.map((item) => item.id.videoId).join(',')),
        mergeMap((cardsIdStr: string) => this.http
          .get<VideoYouTubeResponse>(`${this.VIDEO_URL}key=${this.key}&id=${cardsIdStr}&part=snippet,statistics`)
          .pipe(
            map((response: VideoYouTubeResponse): Card[] => {
              const cardsList = response.items;
              return cardsList.map((item) => {
                const card: Card = {
                  id: item.id,
                  imgSRC: item.snippet.thumbnails.medium.url,
                  title: item.snippet.title,
                  viewCount: item.statistics.viewCount,
                  likeCount: item.statistics.likeCount,
                  dislikeCount: '23',
                  commentCount: item.statistics.commentCount,
                  publishedAt: item.snippet.publishedAt,
                  description: item.snippet.description,
                };
                return card;
              });
            }),
          )),
        catchError((error: HttpErrorResponse) => {
          console.log('[ERROR]', error);
          return EMPTY;
        }),
      );
  }
}
