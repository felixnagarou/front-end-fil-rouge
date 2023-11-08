import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferencesParametersComponent } from './user-preferences-parameters.component';

describe('UserPreferencesParametersComponent', () => {
  let component: UserPreferencesParametersComponent;
  let fixture: ComponentFixture<UserPreferencesParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPreferencesParametersComponent]
    });
    fixture = TestBed.createComponent(UserPreferencesParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
