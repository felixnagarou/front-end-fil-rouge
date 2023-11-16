import { TestBed } from '@angular/core/testing';

import { EpisodeServiceService } from './episode-service.service';

describe('EpisodeServiceService', () => {
  let service: EpisodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
