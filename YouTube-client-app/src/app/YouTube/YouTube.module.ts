import { NgModule } from '@angular/core';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import SharedModule from '../shared/shared.module';
import ColorStatusPipe from './pipes/color-status.pipe';
import FilteringBlockComponent from './components/filtering-block/filtering-block.component';
import CommentsCountComponent from './components/search-results-block/search-result-item/comments-count/comments-count.component';
import DislikesCountComponent from './components/search-results-block/search-result-item/dislikes-count/dislikes-count.component';
import LikesCountComponent from './components/search-results-block/search-result-item/likes-count/likes-count.component';
import MoreButtonComponent from './components/search-results-block/search-result-item/more-button/more-button.component';
import SearchResultItemComponent from './components/search-results-block/search-result-item/search-result-item.component';
import VideoThumbnailComponent from './components/search-results-block/search-result-item/video-thumbnail/video-thumbnail.component';
import VideoTitleComponent from './components/search-results-block/search-result-item/video-title/video-title.component';
import ViewsCountComponent from './components/search-results-block/search-result-item/views-count/views-count.component';
import SearchResultsBlockComponent from './components/search-results-block/search-results-block.component';
import DetailedInfoComponent from './components/detailed-info/detailed-info.component';
import FormatDatePipe from './pipes/format-date.pipe';
import MainPageComponent from './components/main-page/main-page.component';
import YouTubeRoutingModule from './YouTube-routing.module';
import ContainerComponent from './components/detailed-info/container/container-component';
import FilterCardsPipe from './pipes/filter-cards.pipe';
// import YouTubeHttpInterceptor from './interceptors/http-interceptor';

@NgModule({
  declarations: [
    FilteringBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    ColorStatusPipe,
    DetailedInfoComponent,
    FormatDatePipe,
    MainPageComponent,
    ContainerComponent,
    FilterCardsPipe,
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    SharedModule,
    YouTubeRoutingModule,
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: YouTubeHttpInterceptor, multi: true },
  // ],
  exports: [
    FilteringBlockComponent,
    SearchResultsBlockComponent,
  ],
})
export default class YouTubeModule { }
