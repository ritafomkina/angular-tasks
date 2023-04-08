import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import ColorStatusPipe from './pipes/color-status.pipe';
import CriteriaButtonsComponent from './components/filtering-block/criteria-buttons/criteria-buttons.component';
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
import SharedModule from '../shared/shared.module';
import DetailedInfoComponent from './components/detailed-info/detailed-info.component';
import FormatDatePipe from './pipes/format-date.pipe';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: SearchResultsBlockComponent },
];

@NgModule({
  declarations: [
    CriteriaButtonsComponent,
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
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FilteringBlockComponent,
    SearchResultsBlockComponent,
    RouterModule,
  ],
})
export default class YouTubeModule { }