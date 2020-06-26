import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue.model';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[];
  tagFilter: string;

  constructor(private api: IssueService) {}

  ngOnInit(): void {
    this.api.getAllIssues().subscribe((issues) => (this.issues = issues));
  }

  addIssue(newIssue: Issue) {
    this.issues = [...this.issues, newIssue];
  }

  updateIssue(updatedIssue: Issue) {
    this.issues = this.issues.map((issue) =>
      issue.id === updatedIssue.id ? { ...updatedIssue } : issue
    );
  }

  updateFilter(filter: string) {
    this.tagFilter = filter;
  }
}
