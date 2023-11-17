import { TestBed } from '@angular/core/testing';

import { FetchDataForHomePageService } from './fetch-data-for-home-page.service';

describe('FetchDataForHomePageService', () => {
  let service: FetchDataForHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDataForHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
