import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTagListComponent } from './issue-tag-list.component';

describe('IssueTagListComponent', () => {
  let component: IssueTagListComponent;
  let fixture: ComponentFixture<IssueTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
