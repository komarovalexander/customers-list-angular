import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Input() customer: Customer;
  @Input() formType: string;

  @Output() saveButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() removeCustomerClick: EventEmitter<any> = new EventEmitter();

  showRemoveButton: Boolean;

  ngOnInit () {
    this.showRemoveButton = this.removeCustomerClick.observers.length > 0;
  }

  saveClick() {
    this.saveButtonClick.emit();
  }

  removeCustomer() {
    this.removeCustomerClick.emit();
  }

}
