import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() selected = false;
  @Input() edit = false;
  @Input() value: string;
  @Input() idx: number;

  @Output() clickTag = new EventEmitter<string>();
  @Output() deleteTag = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clickTag.emit(this.value);
  }

  onDelete(idx: number) {
    this.deleteTag.emit(idx);
  }
}
