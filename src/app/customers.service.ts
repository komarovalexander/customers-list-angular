import { Injectable } from '@angular/core';

class CustomerName {
  first: string;
  last: string;
}

export class Customer {
  customerID: number;
  name: CustomerName;
  birthday: string;
  gender: string;
  lastContact: Date;
  customerLifetimeValue: number
}

const customers: Customer[] = [
  {
     'customerID': 1,
     'name': {
         'first':'Peter',
         'last':'Smith'
      },
     'birthday':'1996-10-12',
     'gender':'m',
     'lastContact': new Date('2017-06-01T23:28:56.782Z'),
     'customerLifetimeValue': 191.12
  },
  {
     'customerID': 2,
     'name': {
         'first':'Anna',
         'last':'Hopp'
      },
     'birthday':'1987-05-03',
     'gender':'w',
     'lastContact': new Date('2017-07-08T13:18:56.888Z'),
     'customerLifetimeValue': 50.99
  },
  {
     'customerID': 3,
     'name': {
         'first':'Christian',
         'last':'Cox'
      },
     'birthday':'1991-02-21',
     'gender':'m',
     'lastContact': new Date('2017-08-01T11:57:47.142Z'),
     'customerLifetimeValue': 0
  },
  {
     'customerID': 4,
     'name': {
         'first':'Roxy',
         'last':'Fox'
      },
     'birthday':'1979-06-30',
     'gender':'w',
     'lastContact': new Date('2017-02-28T21:08:50.700Z'),
     'customerLifetimeValue': 213.12
  },
  {
     'customerID': 5,
     'name': {
         'first':'Eric',
         'last':'Adam'
      },
     'birthday':'1969-11-21',
     'gender':'m',
     'lastContact': new Date('2017-03-18T12:20:06.702Z'),
     'customerLifetimeValue': 1019.91
  }
];

@Injectable()
export class CustomersService {
  getCustomers(): Customer[] {
    return customers;
  }

  getCustomer(customerID: number) {
    return customers.filter(c => c.customerID == customerID)[0]
  }

  deleteCustomer(customerID: number) {
    customers.forEach( (item, index) => {
      if(item.customerID == customerID)
        customers.splice(index, 1);
    });
  }

  saveCustomer(customer: Customer) {
    var customerOriginal = customers.filter(c => c.customerID == customer.customerID)[0];
    Object.assign(customerOriginal, customer);
  }
}
