import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieListingComponent } from './serie-listing.component';

describe('SerieListingComponent', () => {
  let component: SerieListingComponent;
  let fixture: ComponentFixture<SerieListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieListingComponent]
    });
    fixture = TestBed.createComponent(SerieListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
