import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  providers: [CustomersService],
  styleUrls: ['./customer-detail.component.css']
})

export class CustomerDetailComponent {
  service: CustomersService;
  router: Router;
  customer: Customer;

  constructor(service: CustomersService, router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.router = router;
    this.route.params.subscribe(params => {
      var customer = service.getCustomer(params['customerID']);
      this.customer = JSON.parse(JSON.stringify(customer));
    });
  }

  saveButtonClick() {
    this.service.saveCustomer(this.customer);
    this.router.navigate(['']);
  }

  removeCustomerClick() {
    this.service.deleteCustomer(this.customer.customerID);
    this.router.navigate(['']);
  }

}
