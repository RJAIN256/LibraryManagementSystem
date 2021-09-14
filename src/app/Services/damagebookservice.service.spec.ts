import { TestBed } from '@angular/core/testing';

import { DamagebookserviceService } from './damagebookservice.service';

describe('DamagebookserviceService', () => {
  let service: DamagebookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamagebookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
