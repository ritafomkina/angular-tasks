import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

const MaterialComponents = [
  MatButtonModule, MatInputModule, MatIconModule, HttpClientModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ...MaterialComponents,
  ],
})
export default class SharedModule { }
