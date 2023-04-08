import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { CoreModule } from './core/core.module';
import { YouTubeModule } from './you-tube/you-tube-module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FilteringBlockComponent,
    // SearchingAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    YouTubeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
