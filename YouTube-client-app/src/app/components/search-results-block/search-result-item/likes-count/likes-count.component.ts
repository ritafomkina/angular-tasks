import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.scss'],
})
export default class LikesCountComponent {
  @Input() likeCount: string;
}
