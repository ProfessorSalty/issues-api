import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.scss'],
})
export class ViewIssueComponent implements OnInit {
  @Input() title: string;
  @Input() tags: string[];
  @Input() selectedTags: string[];
  @Input() text: string;

  @Output() selectTag = new EventEmitter<string>();
  @Output() delete = new EventEmitter<never>();
  @Output() enableEdit = new EventEmitter<never>();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.delete.emit();
  }

  onEnableEdit() {
    this.enableEdit.emit();
  }

  onSelectTag(tag: string) {
    this.selectTag.emit(tag);
  }
}
