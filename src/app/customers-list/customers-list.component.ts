import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  providers: [CustomersService],
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {
  service: CustomersService;
  customers: Customer[];
  customer: Customer;

  constructor(service: CustomersService) {
    this.service = service;
    this.customers = service.getCustomers();
  }

  deleteCustomer(customer: Customer) {
    this.service.deleteCustomer(customer.customerID);
  }

  createCustomer() {
    this.customer = new Customer();
  }

  saveButtonClick() {
    this.service.addCustomer(this.customer);
    this.customer = null;
  }
}
