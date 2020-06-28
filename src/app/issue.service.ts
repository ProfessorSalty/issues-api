import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from './issue.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issuesEndpoint: string;

  constructor(private http: HttpClient) {
    this.issuesEndpoint = 'assets/mock_data.json';
  }

  getAllIssues() {
    return this.http.get<Issue[]>(`${this.issuesEndpoint}`);
  }

  getAllTags() {
    return this.getAllIssues().pipe(
      map((issues) => issues.flatMap((issue) => issue.tags)),
      map((tags) => Array.from(new Set(tags))),
      map((tags) => tags.sort((a: string, b: string) => a.localeCompare(b)))
    );
  }
}
