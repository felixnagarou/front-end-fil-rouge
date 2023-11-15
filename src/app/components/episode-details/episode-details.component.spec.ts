import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetailsComponent } from './episode-details.component';

describe('EpisodeDetailsComponent', () => {
  let component: EpisodeDetailsComponent;
  let fixture: ComponentFixture<EpisodeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeDetailsComponent]
    });
    fixture = TestBed.createComponent(EpisodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
