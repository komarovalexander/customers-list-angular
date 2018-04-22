import { TestBed, inject } from '@angular/core/testing';

import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersService]
    });
  });

  it('should be created', inject([CustomersService], (service: CustomersService) => {
    expect(service).toBeTruthy();
  }));

  it('delete a customer', inject([CustomersService], (service: CustomersService) => {
    let CUSTOMER_ID = 1;
    expect(service.getCustomer(CUSTOMER_ID)).not.toBeUndefined();
    service.deleteCustomer(CUSTOMER_ID);
    expect(service.getCustomer(CUSTOMER_ID)).toBeUndefined(undefined);
  }));
});
