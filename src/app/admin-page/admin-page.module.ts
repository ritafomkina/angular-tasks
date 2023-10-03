import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import AdminPageRoutingModule from './admin-page-routing.module';
import SharedModule from '../shared/shared.module';
import CreateNewCardComponent from './components/create-new-card/create-new-card.component';

@NgModule({
  declarations: [
    CreateNewCardComponent,
  ],

  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export default class AdminPageModule { }
