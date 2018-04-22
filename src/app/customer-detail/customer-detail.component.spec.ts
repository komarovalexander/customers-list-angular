import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerDetailComponent } from './customer-detail.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustomersService } from '../customers.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;
  let params: Subject<Params>;

  beforeEach(async(() => {
    params = new Subject<Params>();
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailComponent, CustomerFormComponent ],
      imports: [
        FormsModule,
        BsDatepickerModule
      ]
    });

    TestBed.overrideComponent(CustomerDetailComponent, {
      set: {
        providers: [
            { provide: CustomersService, useClass: CustomersService },
            {
              provide: Router,
              useClass: class { navigate = jasmine.createSpy("navigate") }
            },
            { provide: ActivatedRoute, useValue: { params: params } }
        ]
      }
    });
    fixture = TestBed.createComponent(CustomerDetailComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
