import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import LogAreaComponent from './components/header/log-area/log-area.component';
import SearchingAreaComponent from './components/header/searching-area/searching-area.component';
import SortingAreaComponent from './components/header/sorting-area/sorting-area.component';
import MainComponent from './components/main/main.component';
import SearchItemComponent from './components/main/search-item/search-item.component';
import SearchResultListComponent from './components/main/search-result-list/search-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogAreaComponent,
    SearchingAreaComponent,
    SortingAreaComponent,
    MainComponent,
    SearchItemComponent,
    SearchResultListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
