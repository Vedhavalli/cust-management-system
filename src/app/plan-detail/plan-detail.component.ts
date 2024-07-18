import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-plan-detail',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './plan-detail.component.html',
  styleUrl: './plan-detail.component.css'
})
export class PlanDetailComponent implements OnChanges {

  planDetForm !: FormGroup

  Plans: any = ['Platinum365', 'Gold180', 'Silver90']
  Costs: any = ['499', '299', '199']
  Validities: any = ['365', '180', '90']
  Statuses: any = ['Active', 'Inactive']

  @Input() formComp!: String;
  @Input() customerDetail: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.planDetForm = this.formBuilder.group({
      existPlanName: [''],
      newPlanName: ['', Validators.required],
      cost: ['', Validators.required],
      validity: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['customerDetail'], changes)
    if(changes['formComp'].currentValue === 'exist') {
      this.planDetForm.controls['existPlanName'].setValue(this.customerDetail?.planName);
    }
  }

  changeVal(e: any) {
    console.log(e.target.value);
  }

  get form() {
    return this.planDetForm.controls;
  }

  onSubmit(form: FormGroup) {
    console.log(this.planDetForm.value);
    this.router.navigate(['/listCustomer']);
  }
}
