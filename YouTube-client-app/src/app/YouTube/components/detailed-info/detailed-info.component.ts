import { Component, Input } from '@angular/core';
import { Card } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export default class DetailedInfoComponent {
  @Input() card: Card;
}
