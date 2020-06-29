import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentViewComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
