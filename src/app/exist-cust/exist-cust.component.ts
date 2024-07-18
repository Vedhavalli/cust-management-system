import { AfterViewChecked, AfterViewInit, Component, inject } from '@angular/core';
import { PlanDetailComponent } from '../plan-detail/plan-detail.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-exist-cust',
  standalone: true,
  imports: [PlanDetailComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './exist-cust.component.html',
  styleUrl: './exist-cust.component.css'
})
export class ExistCustComponent {
  isSubmitted: Boolean = false;
  existForm!: FormGroup;

  customerDetail: any;
  custService = inject(CustomerServiceService);

  constructor(private formBuilder: FormBuilder) {
    this.existForm = this.formBuilder.group({
      renewDate: [''],
      curStatus: ['']
    })
    this.custService.getCustomer().then((customerDetail) => {
      this.customerDetail = customerDetail;
      console.log("customer :1", this.customerDetail)
      this.existForm.controls['renewDate'].setValue(this.customerDetail?.renewalDate);
      this.existForm.controls['curStatus'].setValue(this.customerDetail?.planStatus);
    });
  }

  onSubmit(form: FormGroup) {
    this.isSubmitted = true
    console.log('Existing Cust-Form Valid?', form.valid);
  }
}
