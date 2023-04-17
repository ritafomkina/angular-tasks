import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export default class FormatDatePipe implements PipeTransform {
  private week: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  private months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public transform(str: string): string {
    const date = new Date(Date.parse(str));
    const formatedDate = `${this.week[date.getDay()]}, ${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return formatedDate;
  }
}
