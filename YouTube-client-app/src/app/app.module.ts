import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CoreModule from './core/core.module';
import YouTubeHttpInterceptor from './YouTube/interceptors/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YouTubeHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule { }
