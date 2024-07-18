import { Component, OnInit, inject } from '@angular/core';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-customer-info',
  standalone: true,
  imports: [],
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.css'
})
export class CustomerInfoComponent {
  customerList: any;
  custService = inject(CustomerServiceService);

  constructor() {
    this.custService.getCustomers().then((customerList) => {
      this.customerList = customerList;
      console.log("customer List", this.customerList)
    });
  }

}
