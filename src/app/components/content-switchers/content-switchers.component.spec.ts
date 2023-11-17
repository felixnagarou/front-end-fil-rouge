import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSwitchersComponent } from './content-switchers.component';

describe('ContentSwitchersComponent', () => {
  let component: ContentSwitchersComponent;
  let fixture: ComponentFixture<ContentSwitchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSwitchersComponent]
    });
    fixture = TestBed.createComponent(ContentSwitchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
