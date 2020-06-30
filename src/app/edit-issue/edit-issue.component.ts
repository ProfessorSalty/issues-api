import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../issue.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss'],
})
export class EditIssueComponent implements OnInit {
  @Input() allTags: string[];
  @Input() id?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() tags?: string[] = [];

  @Output() submitIssue = new EventEmitter<Issue>();
  @Output() deleteIssue = new EventEmitter<string>();
  @Output() addNewTag = new EventEmitter<string>();
  @Output() cancelEditing = new EventEmitter<boolean>();

  titleInputControl: FormControl;
  textInputControl: FormControl;
  tagInputControl: FormControl;
  tagsControl: string[];

  constructor() {}

  ngOnInit(): void {
    this.titleInputControl = new FormControl(this.title || '');
    this.textInputControl = new FormControl(this.text || '');
    this.tagInputControl = new FormControl('');
    this.tagsControl = this.tags || [];
  }

  private addTag() {
    if (
      this.tagInputControl.pristine ||
      this.tagInputControl.value === '' ||
      this.tagsControl.includes(this.tagInputControl.value)
    ) {
      return;
    }
    this.tagsControl.push(this.tagInputControl.value);
    this.addNewTag.emit(this.tagInputControl.value);
    this.tagInputControl.reset('');
  }

  private resetFields() {
    this.titleInputControl.reset('');
    this.textInputControl.reset('');
    this.tagInputControl.reset('');
    this.tagsControl = [];
  }

  onTagBlur() {
    this.addTag();
  }

  onTagEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTag();
    }
  }

  onTagInput(event: Event) {
    if ((event as InputEvent).data) {
      return;
    }
    if (this.allTags.includes(this.tagInputControl.value)) {
      this.addTag();
    }
  }

  onRemoveTag(index: number) {
    this.tagsControl.splice(index, 1);
  }

  onSubmit() {
    const newIssue: Issue = {
      id: this.id || '',
      title: this.titleInputControl.value,
      text: this.textInputControl.value,
      tags: this.tagsControl,
    };
    this.submitIssue.emit(newIssue);
    this.resetFields();
  }

  onCancel() {
    this.cancelEditing.emit(true);
    this.resetFields();
  }
}
