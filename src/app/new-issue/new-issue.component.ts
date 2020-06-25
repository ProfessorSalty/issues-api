import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Issue } from '../issue.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css'],
})
export class NewIssueComponent implements OnInit {
  @Output() addIssue = new EventEmitter<Issue>();
  titleControl: FormControl;
  textControl: FormControl;
  tagControl: FormControl;
  tags: string[];

  constructor() {}

  ngOnInit(): void {
    this.titleControl = new FormControl();
    this.textControl = new FormControl();
    this.tagControl = new FormControl('');
    this.tags = [];
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

  submitNewIssue() {
    const newIssue: Issue = {
      id: '',
      title: this.titleControl.value,
      text: this.textControl.value,
      tags: this.tags,
    };

    this.addIssue.emit(newIssue);
    this.titleControl.reset('');
    this.textControl.reset('');
    this.tags = [];
  }
}
