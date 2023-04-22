import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function dateIsInvalid(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const creationDate = new Date(control.value);
    const todayDate = new Date();
    const isValid = creationDate < todayDate ? null : { dateIsInvalid: { value: creationDate } };
    return isValid;
  };
}
