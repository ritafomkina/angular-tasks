import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import SharedModule from '../shared/shared.module';
import HeaderComponent from './components/header/header.component';
import LogoComponent from './components/header/logo/logo.component';
import SearchingAreaComponent from './components/header/searching-area/searching-area.component';
import SettingsButtonComponent from './components/header/settings-button/settings-button.component';
import LoginInfoComponent from './components/header/login-info/login-info.component';
import ErrorPageComponent from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchingAreaComponent,
    SettingsButtonComponent,
    LoginInfoComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export default class CoreModule { }
