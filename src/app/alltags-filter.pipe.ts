import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allTagsFilter'
})
export class AllTagsFilterPipe implements PipeTransform {
  transform(allTags: string[], tagFilter: string): string[] {
    return [...allTags.filter(tag => tag.includes(tagFilter))];
  }
}
