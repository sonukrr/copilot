import { TestBed } from '@angular/core/testing';

import { UbaServiceService } from './uba-service.service';

describe('UbaServiceService', () => {
  let service: UbaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
