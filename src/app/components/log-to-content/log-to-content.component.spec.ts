import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogToContentComponent } from './log-to-content.component';

describe('LogToContentComponent', () => {
  let component: LogToContentComponent;
  let fixture: ComponentFixture<LogToContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogToContentComponent]
    });
    fixture = TestBed.createComponent(LogToContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
