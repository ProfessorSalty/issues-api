import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../issue.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;
  @Input() editMode = false;

  @Output() updateIssue = new EventEmitter<Issue>();
  @Output() deleteIssue = new EventEmitter<string>();

  titleControl: FormControl;
  textControl: FormControl;
  tagControl: FormControl;
  tags: string[];

  constructor() {}

  ngOnInit(): void {
    this.titleControl = new FormControl(this.issue.title);
    this.textControl = new FormControl(this.issue.text);
    this.tagControl = new FormControl('');
    this.tags = [...this.issue.tags];
  }

  enableEdit() {
    this.editMode = true;
  }

  disableEdit() {
    this.editMode = false;
  }

  addTag() {
    if (this.tagControl.pristine) {
      return;
    }
    this.tags.push(this.tagControl.value);
    this.tagControl.reset('');
  }

  addTagOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTag();
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  submitEdit() {
    const updatedIssue = {
      id: this.issue.id,
      title: this.titleControl.value,
      text: this.textControl.value,
      tags: this.tags,
    };
    this.updateIssue.emit(updatedIssue);
  }

  cancelEdit() {
    this.disableEdit();
    this.titleControl.reset(this.issue.title);
    this.textControl.reset(this.issue.text);
    this.tags = [...this.issue.tags];
    this.tagControl.reset('');
  }

  onDelete() {
    this.deleteIssue.emit(this.issue.id);
  }
}
