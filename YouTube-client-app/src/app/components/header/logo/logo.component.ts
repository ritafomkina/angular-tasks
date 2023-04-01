import { Component, Input } from '@angular/core';
import AppComponent from '../../../app.component'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})

export default class LogoComponent {
public imgSRC = '../../../../assets/logo.png';
@Input() title: string;
}
