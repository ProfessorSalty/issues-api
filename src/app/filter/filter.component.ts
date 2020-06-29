import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() allTags: string[];
  @Input() selectedTags: string[];

  @Output() setFilter = new EventEmitter<string>();
  @Output() selectTag = new EventEmitter<string>();
  @Output() deselectTag = new EventEmitter<string>();
  @Output() deselectAllTags = new EventEmitter<never>();

  filterInput: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.filterInput = new FormControl('');
  }

  changeFilter(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.setFilter.emit(value);
  }

  onSelectTag(tag: string) {
    this.selectTag.emit(tag);
  }

  onDeselectTag(tag: string) {
    this.deselectTag.emit(tag);
  }

  onDeselectAllTags() {
    this.deselectAllTags.emit();
  }
}
