import { Routes } from '@angular/router';
import { NewCustComponent } from './new-cust/new-cust.component';
import { ExistCustComponent } from './exist-cust/exist-cust.component';
import { PageNotFoundComponent } from './page-not-found/pagenotfound.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

export const routes: Routes = [
    {
        path: 'createCustomer',
        component: NewCustComponent
    },
    {
        path: 'updateCustomer',
        component: ExistCustComponent
    },
    {
        path: 'listCustomer',
        component: CustomerInfoComponent,
    },
    { path: '',   redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];



