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

  // @Output() searchBy = new EventEmitter<string | null>();

  // onShowSearchingBlock() {
  //   this.router.navigateByUrl('/main');
  //   this.showSearchingBlock.emit();
  // }

  onSubmit() {
    this.router.navigateByUrl('/main');
    // this.searchBy.emit(this.searchForm.value.search);
    this.searchingService.value = this.searchForm.value.search || '';
  }
}
