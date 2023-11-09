import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountParametersComponent } from './user-account-parameters.component';

describe('UserAccountParametersComponent', () => {
  let component: UserAccountParametersComponent;
  let fixture: ComponentFixture<UserAccountParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAccountParametersComponent]
    });
    fixture = TestBed.createComponent(UserAccountParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
