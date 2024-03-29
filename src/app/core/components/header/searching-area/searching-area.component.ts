import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import SearchingService from 'src/app/youtubemod/services/searching.service';

@Component({
  selector: 'app-searching-area',
  templateUrl: './searching-area.component.html',
  styleUrls: ['./searching-area.component.scss'],
})
export default class SearchingAreaComponent {
  constructor(
    private formBuilder: FormBuilder,
    private searchingService: SearchingService,
  ) {}

  public searchForm = this.formBuilder.group({
    search: '',
  });

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.value?.length) {
      return;
    }
    const { value } = input;
    this.searchingService.changeMessage(value.trim());
  }
}
