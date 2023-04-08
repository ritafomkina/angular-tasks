import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searching-area',
  templateUrl: './searching-area.component.html',
  styleUrls: ['./searching-area.component.scss'],
})
export default class SearchingAreaComponent {
  constructor(
    private router: Router,
  ) {}
  // public search: boolean = false;

  @Output() showSearchingBlock = new EventEmitter<boolean>();

  onShowSearchingBlock() {
    this.router.navigateByUrl('/main');
    console.log('fuck');
    this.showSearchingBlock.emit();
  }
}
