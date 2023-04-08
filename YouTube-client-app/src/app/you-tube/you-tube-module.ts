import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ColorStatusPipe from './pipes/color-status.pipe';
import CriteriaButtonsComponent from './components/filtering-block/criteria-buttons/criteria-buttons.component';
import FilteringBlockComponent from './components/filtering-block/filtering-block.component';
import HeaderComponent from '../core/components/header/header.component';
import LoginInfoComponent from '../core/components/header/login-info/login-info.component';
import LogoComponent from '../core/components/header/logo/logo.component';
import SearchingAreaComponent from '../core/components/header/searching-area/searching-area.component';
import SettingsButtonComponent from '../core/components/header/settings-button/settings-button.component';
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

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchingAreaComponent,
    SettingsButtonComponent,
    LoginInfoComponent,
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
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FilteringBlockComponent,
    SearchResultsBlockComponent,
  ],
})
export class YouTubeModule { }
