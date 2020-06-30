import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() edit = false;
  @Input() delete = false;
  @Input() cancel = false;
  @Input() submit = false;
  @Output() remove = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    this.remove.emit(event);
  }
}
