import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from './issue.model';

@Pipe({
  name: 'selectedTagFilter',
})
export class SelectedTagFilterPipe implements PipeTransform {
  transform(issues: Issue[], selectedTags: string[]): Issue[] {
    if (selectedTags.length === 0) {
      return issues;
    }
    return issues.filter((issue) =>
      issue.tags.some((tag) => selectedTags.includes(tag))
    );
  }
}
