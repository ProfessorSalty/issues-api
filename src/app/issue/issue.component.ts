import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../issue.model';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss'],
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;
  @Input() allTags: string[];
  @Input() selectedTags: string[];

  @Output() updateIssue = new EventEmitter<Issue>();
  @Output() deleteIssue = new EventEmitter<string>();
  @Output() addNewTag = new EventEmitter<string>();
  @Output() selectTag = new EventEmitter<string>();

  editMode = false;

  constructor() {}

  ngOnInit(): void {}

  onEnableEdit() {
    this.editMode = true;
  }

  onDisableEdit() {
    this.editMode = false;
  }

  onDelete() {
    this.deleteIssue.emit(this.issue.id);
  }

  onUpdate(newIssue: Issue) {
    this.updateIssue.emit(newIssue);
  }

  onAddNewTag(tag: string) {
    this.addNewTag.emit(tag);
  }

  onSelectTag(tag: string) {
    this.selectTag.emit(tag);
  }
}
