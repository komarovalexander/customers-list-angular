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
  customerLifetimeValue: number;
  constructor() {
    this.name = new CustomerName();
  }
}
