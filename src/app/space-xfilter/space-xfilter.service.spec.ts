import { TestBed } from '@angular/core/testing';

import { SpaceXFilterService } from './space-xfilter.service';

describe('SpaceXFilterService', () => {
  let service: SpaceXFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
