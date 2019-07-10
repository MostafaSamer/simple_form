import { TestBed } from '@angular/core/testing';

import { ShareApiDataService } from './share-api-data.service';

describe('ShareApiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareApiDataService = TestBed.get(ShareApiDataService);
    expect(service).toBeTruthy();
  });
});
