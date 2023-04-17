import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatButtonModule, MatInputModule, MatIconModule,
];

const modules = [
  HttpClientModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ...MaterialComponents, ...modules,
  ],
})
export default class SharedModule { }
