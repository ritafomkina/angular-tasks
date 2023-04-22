import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filterCards',
})
export default class FilterCardsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  public transform(cards: Card[], search: string): Card[] {
    return cards.filter((card) => card.title.toLowerCase().includes(search.toLowerCase()));
  }
}
