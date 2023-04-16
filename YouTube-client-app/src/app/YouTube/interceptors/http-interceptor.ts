import {
  HttpInterceptor, HttpEvent, HttpHandler, HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class YouTubeHttpInterceptor implements HttpInterceptor {
  private readonly key = 'AIzaSyDM-QM_xNmTJ7LdWMylnN3VxQdBfDVWAsc';

  private readonly SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?';

  private readonly VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos?';

  public intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    return next.handle(req.clone({
      url: `${this.VIDEO_URL}/${req.url}`,
      setParams: {
        key: this.key,
      },
    }));
  }
}
