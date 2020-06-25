import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import {HttpClientModule} from '@angular/common/http';
import { IssueComponent } from './issue/issue.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
