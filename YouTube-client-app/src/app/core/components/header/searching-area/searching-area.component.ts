import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import SearchingService from 'src/app/YouTube/services/searching.service';

@Component({
  selector: 'app-searching-area',
  templateUrl: './searching-area.component.html',
  styleUrls: ['./searching-area.component.scss'],
})
export default class SearchingAreaComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private searchingService: SearchingService,
  ) {}

  // value = '';

  searchForm = this.formBuilder.group({
    search: '',
  });

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.value?.length) {
      return;
    }
    const { value } = input;
    this.searchingService.changeMessage(value);
    // console.log(value);
  }
}
