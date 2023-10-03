import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
} from '@angular/forms';
import dateIsInvalid from '../../validators/input-date.validator';

@Component({
  selector: 'app-create-new-card',
  templateUrl: './create-new-card.component.html',
  styleUrls: ['./create-new-card.component.scss'],
})
export default class CreateNewCardComponent implements OnInit {
  public newCardForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  private reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  public ngOnInit() {
    this.newCardForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      image: ['', [Validators.required, Validators.pattern(this.reg)]],
      videoURL: ['', [Validators.required, Validators.pattern(this.reg)]],
      date: ['', [Validators.required, dateIsInvalid()]],
    });
  }

  public isTouched(formControlName: FormControl): boolean {
    const state = formControlName.dirty || formControlName.touched;
    return state;
  }

  public get title() {
    return this.newCardForm.controls.title as FormControl;
  }

  public get description() {
    return this.newCardForm.controls.description as FormControl;
  }

  public get image() {
    return this.newCardForm.controls.image as FormControl;
  }

  public get videoURL() {
    return this.newCardForm.controls.videoURL as FormControl;
  }

  public get date() {
    return this.newCardForm.controls.date as FormControl;
  }

  public createCard() {
    // eslint-disable-next-line no-console
    console.log(this.newCardForm.controls);
  }
}
