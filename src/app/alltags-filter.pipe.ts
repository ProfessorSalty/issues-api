import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alltagsFilter'
})
export class AlltagsFilterPipe implements PipeTransform {
  transform(allTags: string[], tagFilter: string): string[] {
    return [...allTags.filter(tag => tag.includes(tagFilter))];
  }

}
