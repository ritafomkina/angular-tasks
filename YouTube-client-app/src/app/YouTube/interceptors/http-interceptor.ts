import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpEvent, HttpHandler, HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class YouTubeHttpInterceptor implements HttpInterceptor {
  private readonly key = 'AIzaSyDM-QM_xNmTJ7LdWMylnN3VxQdBfDVWAsc';

  private readonly YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';

  public intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    return next.handle(
      req.clone({
        url: `${this.YOUTUBE_URL}/${req.url}`,
        setParams: {
          key: this.key,
        },
      }),
    );
  }
}
