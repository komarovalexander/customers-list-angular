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

  it('get a customer', inject([CustomersService], (service: CustomersService) => {
    expect(service.getCustomer(1)).not.toBeUndefined();
  }));

  it('save a customer', inject([CustomersService], (service: CustomersService) => {
    var editedCustomer = {
      'customerID': 2,
      'name': {
          'first':'Eric1',
          'last':'Adam1'
       },
      'birthday':'1969-11-21',
      'gender':'m',
      'lastContact': new Date('2017-03-18T12:20:06.702Z'),
      'customerLifetimeValue': 1019.91
    };
    service.saveCustomer(editedCustomer);
    var savedCustomer = service.getCustomer(2);
    expect(savedCustomer.name.first).toEqual('Eric1');
  }));

  it('delete a customer', inject([CustomersService], (service: CustomersService) => {
    const CUSTOMER_ID = 1;
    expect(service.getCustomer(CUSTOMER_ID)).not.toBeUndefined();
    service.deleteCustomer(CUSTOMER_ID);
    expect(service.getCustomer(CUSTOMER_ID)).toBeUndefined();
  }));
});
