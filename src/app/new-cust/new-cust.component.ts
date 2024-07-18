import { Component, OnInit } from '@angular/core';
import { PlanDetailComponent } from '../plan-detail/plan-detail.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-cust',
  standalone: true,
  imports: [PlanDetailComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './new-cust.component.html',
  styleUrl: './new-cust.component.css'
})
export class NewCustComponent implements OnInit {
  title = "New Customer";
  isSubmitted: boolean = false

  custForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.custForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aadharNo: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern(/^[0-9]\d*$/)]],
      regDate: [''],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]]
    })
  }

  ngOnInit() { }

  onSubmit(form: FormGroup) {
    console.log('New Cust-Form Valid?', form.valid);
    console.log('firstName', form.value.firstName);
    console.log('lastName', form.value.lastName);
    console.log('email', form.value.email);
    console.log('aadharNo', form.value.aadharNo);
    console.log('regDate', form.value.regDate);
    console.log('mobileNo', form.value.mobileNo);
    this.isSubmitted = true
  }
}
