import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDisplayComponent } from './categories-display.component';

describe('CategoriesDisplayComponent', () => {
  let component: CategoriesDisplayComponent;
  let fixture: ComponentFixture<CategoriesDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesDisplayComponent]
    });
    fixture = TestBed.createComponent(CategoriesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
