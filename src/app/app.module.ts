import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import {HttpClientModule} from '@angular/common/http';
import { IssueComponent } from './issue/issue.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { FilterComponent } from './filter/filter.component';
import { TagFilterPipe } from './tag-filter.pipe';
import { AllTagsFilterPipe } from './alltags-filter.pipe';
import { ExcludeTagsFilterPipe } from './exclude-tags-filter.pipe';
import { MakeCalculationsPipe } from './make-calculations.pipe';
import { CommentViewComponent } from './comment-view/comment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent,
    NewIssueComponent,
    FilterComponent,
    TagFilterPipe,
    AllTagsFilterPipe,
    ExcludeTagsFilterPipe,
    MakeCalculationsPipe,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
