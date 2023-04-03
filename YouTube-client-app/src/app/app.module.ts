import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchingAreaComponent from './components/header/searching-area/searching-area.component';
import MaterialModule from './material/material.module';
import LogoComponent from './components/header/logo/logo.component';
import LoginInfoComponent from './components/header/login-info/login-info.component';
import SettingsButtonComponent from './components/header/settings-button/settings-button.component';
import CriteriaButtonsComponent from './components/filtering-block/criteria-buttons/criteria-buttons.component';
import FilteringBlockComponent from './components/filtering-block/filtering-block.component';
import SearchResultsBlockComponent from './components/search-results-block/search-results-block.component';
import SearchResultItemComponent from './components/search-results-block/search-result-item/search-result-item.component';
import VideoThumbnailComponent from './components/search-results-block/search-result-item/video-thumbnail/video-thumbnail.component';
import ViewsCountComponent from './components/search-results-block/search-result-item/views-count/views-count.component';
import LikesCountComponent from './components/search-results-block/search-result-item/likes-count/likes-count.component';
import DislikesCountComponent from './components/search-results-block/search-result-item/dislikes-count/dislikes-count.component';
import CommentsCountComponent from './components/search-results-block/search-result-item/comments-count/comments-count.component';
import VideoTitleComponent from './components/search-results-block/search-result-item/video-title/video-title.component';
import MoreButtonComponent from './components/search-results-block/search-result-item/more-button/more-button.component';
import ColorStatusPipe from './pipes/color-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
