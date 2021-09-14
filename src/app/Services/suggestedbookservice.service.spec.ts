import { TestBed } from '@angular/core/testing';

import { SuggestedbookserviceService } from './suggestedbookservice.service';

describe('SuggestedbookserviceService', () => {
  let service: SuggestedbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestedbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
