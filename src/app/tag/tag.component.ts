import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() selected = false;
  @Input() value: string;

  @Output() clickTag = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clickTag.emit(this.value);
  }
}
