import { TestBed } from '@angular/core/testing';

import { AdminregisterserviceService } from './adminregisterservice.service';

describe('LoginregisterserviceService', () => {
  let service: AdminregisterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminregisterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
