import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTitleBarComponent } from './issue-title-bar.component';

describe('IssueTitleBarComponent', () => {
  let component: IssueTitleBarComponent;
  let fixture: ComponentFixture<IssueTitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
