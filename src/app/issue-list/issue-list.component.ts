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

  constructor(private api: IssueService) {}

  ngOnInit(): void {
    this.api.getAllIssues().subscribe((issues) => (this.issues = issues));
  }
}
