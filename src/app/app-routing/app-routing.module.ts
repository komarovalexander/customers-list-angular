import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersListComponent,
    },
    {
      path: 'customer-detail/:customerID',
      component: CustomerDetailComponent,
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
