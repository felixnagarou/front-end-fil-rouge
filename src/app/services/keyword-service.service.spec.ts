import { TestBed } from '@angular/core/testing';

import { KeywordServiceService } from './keyword-service.service';

describe('KeywordServiceService', () => {
  let service: KeywordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeywordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
