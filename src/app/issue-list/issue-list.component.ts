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
  allTags: string[];
  tagFilter: string;

  constructor(private api: IssueService) {}

  ngOnInit(): void {
    this.api.getAllIssues().subscribe((issues) => (this.issues = issues));
    this.api.getAllTags().subscribe((tags) => (this.allTags = tags));
  }

  addNewTag(newTag: string) {
    if (!this.allTags.includes(newTag)) {
      this.allTags.push(newTag);
    }
  }

  addIssue(newIssue: Issue) {
    this.issues = [...this.issues, newIssue];
  }

  updateIssue(updatedIssue: Issue) {
    this.issues = this.issues.map((issue) =>
      issue.id === updatedIssue.id ? { ...updatedIssue } : issue
    );
  }

  deleteIssue(id: string) {
    this.issues = this.issues.filter((issue) => issue.id !== id);
  }

  updateFilter(filter: string) {
    this.tagFilter = filter;
  }
}
