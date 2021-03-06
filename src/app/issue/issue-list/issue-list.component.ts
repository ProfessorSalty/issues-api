import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  allTags: string[] = [];
  selectedTags: string[] = [];
  tagFilter: string;

  constructor(private api: IssueService) {}

  ngOnInit(): void {
    this.api.getAllIssues().subscribe((issues) => (this.issues = issues));
    this.api.getAllTags().subscribe((tags) => (this.allTags = tags));
  }

  onSelectTag(newTag: string) {
    this.selectedTags = [...this.selectedTags, newTag];
  }

  onDeselectTag(target: string) {
    this.selectedTags = this.selectedTags.filter((tag) => tag !== target);
  }

  onAddNewTag(newTag: string) {
    if (!this.allTags.includes(newTag)) {
      this.allTags = [...this.allTags, newTag].sort((a, b) =>
        a.localeCompare(b)
      );
    }
  }

  onSubmitNewIssue(newIssue: Issue) {
    this.issues = [...this.issues, newIssue];
  }

  onUpdateIssue(updatedIssue: Issue) {
    this.issues = this.issues.map((issue) =>
      issue.id === updatedIssue.id ? { ...updatedIssue } : issue
    );
  }

  onDeleteIssue(id: string) {
    this.issues = this.issues.filter((issue) => issue.id !== id);
  }

  onUpdateFilter(filter: string) {
    this.tagFilter = filter;
  }

  onDeselectAllTags() {
    this.selectedTags = [];
  }
}
