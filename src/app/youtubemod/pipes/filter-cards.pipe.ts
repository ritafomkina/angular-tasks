import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/youtubemod/models/search-item.model';

@Pipe({
  name: 'filterCards',
})
export default class FilterCardsPipe implements PipeTransform {
  public transform(cards: Card[], search: string): Card[] {
    return cards.filter((card) => card.title.toLowerCase().includes(search.toLowerCase()));
  }
}
