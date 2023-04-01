import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export default class VideoThumbnailComponent {
  @Input() src: string;
  @Input() title: string;
}
