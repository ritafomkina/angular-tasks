import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filterCards',
})
export default class FilterCardsPipe implements PipeTransform {
  whyINeedToUseThis = true;

  transform(cards: Card[], search: string): Card[] {
    this.whyINeedToUseThis = !this.whyINeedToUseThis; // почему не могу использовать без this?
    return cards.filter((card) => card.title.toLowerCase().includes(search.toLowerCase()));
  }
}
