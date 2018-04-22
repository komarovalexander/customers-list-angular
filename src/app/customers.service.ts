import { Injectable } from '@angular/core';

export class Customer {
  id: number;
  name: string;
  email: string;
  phone: number;
  city: string;
  companyName: string;
}

const customers: Customer[] = [{
  id: 1,
  name: 'Harv Mudd',
  email: 'harv515@mail.com',
  phone: 19209912280,
  city: 'Los Angeles, CA',
  companyName: 'Super Mart of the West'
}, {
  id: 2,
  name: 'Tony Packard',
  email: 'tony721@mail.com',
  phone: 3129933281,
  city: 'San Jose, CA',
  companyName: 'K&S Music'
}];

@Injectable()
export class CustomersService {
  getCustomers(): Customer[] {
    return customers;
  }
}
