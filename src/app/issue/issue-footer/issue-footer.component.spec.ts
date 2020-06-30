import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueFooterComponent } from './issue-footer.component';

describe('IssueFooterComponent', () => {
  let component: IssueFooterComponent;
  let fixture: ComponentFixture<IssueFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
