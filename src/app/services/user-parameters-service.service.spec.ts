import { TestBed } from '@angular/core/testing';

import { UserParametersServiceService } from './user-parameters-service.service';

describe('UserParametersServiceService', () => {
  let service: UserParametersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserParametersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
