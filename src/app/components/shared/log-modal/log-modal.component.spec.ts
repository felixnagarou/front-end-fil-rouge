import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogModalComponent } from './log-modal.component';

describe('LogModalComponent', () => {
  let component: LogModalComponent;
  let fixture: ComponentFixture<LogModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogModalComponent]
    });
    fixture = TestBed.createComponent(LogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
