import { TestBed } from '@angular/core/testing';

import { FetchShowDataFromAPIService } from './fetch-show-data-from-api.service';

describe('FetchShowDataFromAPIService', () => {
  let service: FetchShowDataFromAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchShowDataFromAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
