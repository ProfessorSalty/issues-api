import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() setFilter = new EventEmitter<string>();
  filterInput: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.filterInput = new FormControl('');
  }

  changeFilter(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.setFilter.emit(value);
  }
}
