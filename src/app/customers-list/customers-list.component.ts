import { Component } from '@angular/core';
import { Customer, CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  providers: [CustomersService],
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {
  service: CustomersService;
  customers: Customer[];

  constructor(service: CustomersService) {
    this.service = service;
    this.customers = service.getCustomers();
  }

  deleteCustomer(customer: Customer) {
    this.service.deleteCustomer(customer.customerID);
  }

}
