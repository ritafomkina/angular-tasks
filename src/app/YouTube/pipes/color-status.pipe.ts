import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorStatus',
})
export default class ColorStatusPipe implements PipeTransform {
  private blue = 'blue';

  private green = 'green';

  private yellow = 'yellow';

  private red = 'red';

  public transform(publishedAt: string): string {
    const tobay: Date = new Date();
    const pubDate: Date = new Date(Date.parse(publishedAt));
    const diff: number = Math.abs(tobay.getTime() - pubDate.getTime());
    const diffDays: number = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 7) return this.blue;
    if (diffDays >= 7 && diffDays <= 30) return this.green;
    if (diffDays > 30) {
      const difMonth: number = Math.ceil(diff / (1000 * 60 * 60 * 24 * 31));
      if (difMonth > 1 && difMonth <= 6) return this.yellow;
      if (difMonth > 6) return this.red;
    }
    return '';
  }
}
