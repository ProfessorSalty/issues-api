import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import {HttpClientModule} from '@angular/common/http';
import { IssueComponent } from './issue/issue.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NewIssueComponent } from './new-issue/new-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent,
    NewIssueComponent
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
