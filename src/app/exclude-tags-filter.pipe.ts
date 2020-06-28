import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excludeTagsFilter',
  pure: false,
})
export class ExcludeTagsFilterPipe implements PipeTransform {
  transform(allTags: string[], currentTags: string[]): string[] {
    return [...allTags.filter((tag) => !currentTags.includes(tag))];
  }
}
