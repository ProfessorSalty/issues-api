import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  @Input() selected = false;
  @Input() value: string;

  @Output() clickTag = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(tag: string) {
    this.clickTag.emit(tag);
  }
}
