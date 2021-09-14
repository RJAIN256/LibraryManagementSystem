import { TestBed } from '@angular/core/testing';

import { BookreturnedserviceService } from './bookreturnedservice.service';

describe('BookreturnedserviceService', () => {
  let service: BookreturnedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookreturnedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
