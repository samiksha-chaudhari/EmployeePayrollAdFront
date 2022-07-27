import { TestBed } from '@angular/core/testing';

import { PayoutServicesService } from './payout-services.service';

describe('PayoutServicesService', () => {
  let service: PayoutServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayoutServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
