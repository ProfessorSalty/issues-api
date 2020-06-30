import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { HttpClientModule } from '@angular/common/http';
import { IssueComponent } from './issue/issue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditIssueComponent } from './issue/edit-issue/edit-issue.component';
import { FilterComponent } from './filter/filter.component';
import { TagFilterPipe } from './tag-filter.pipe';
import { AllTagsFilterPipe } from './alltags-filter.pipe';
import { ExcludeTagsFilterPipe } from './exclude-tags-filter.pipe';
import { MakeCalculationsPipe } from './make-calculations.pipe';
import { CommentViewComponent } from './issue/comment-view/comment-view.component';
import { TagComponent } from './tag/tag.component';
import { SelectedTagFilterPipe } from './selected-tag-filter.pipe';
import { IssueTitleBarComponent } from './issue/issue-title-bar/issue-title-bar.component';
import { IssueContentComponent } from './issue/issue-content/issue-content.component';
import { IssueFooterComponent } from './issue/issue-footer/issue-footer.component';
import { IssueTagListComponent } from './issue/issue-tag-list/issue-tag-list.component';
import { ViewIssueComponent } from './issue/view-issue/view-issue.component';
import { ButtonComponent } from './issue/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent,
    EditIssueComponent,
    FilterComponent,
    TagFilterPipe,
    AllTagsFilterPipe,
    ExcludeTagsFilterPipe,
    MakeCalculationsPipe,
    CommentViewComponent,
    TagComponent,
    SelectedTagFilterPipe,
    IssueTitleBarComponent,
    IssueContentComponent,
    IssueFooterComponent,
    IssueTagListComponent,
    ViewIssueComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
