import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.scss'],
})
export default class ViewsCountComponent {
  @Input() viewCount: string;
}
