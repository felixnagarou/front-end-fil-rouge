import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileParametersComponent } from './user-profile-parameters.component';

describe('UserProfileParametersComponent', () => {
  let component: UserProfileParametersComponent;
  let fixture: ComponentFixture<UserProfileParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileParametersComponent]
    });
    fixture = TestBed.createComponent(UserProfileParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
