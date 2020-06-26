import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from './issue.model';

@Pipe({
  name: 'tagFilter',
})
export class TagFilterPipe implements PipeTransform {
  transform(allIssues: Issue[], tagFilter: string): Issue[] {
    if (!tagFilter) {
      return allIssues;
    }
    return allIssues.filter((issue) =>
      issue.tags.some((tag) => tag.includes(tagFilter))
    );
  }
}
