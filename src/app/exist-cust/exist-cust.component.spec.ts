import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistCustComponent } from './exist-cust.component';

describe('ExistCustComponent', () => {
  let component: ExistCustComponent;
  let fixture: ComponentFixture<ExistCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExistCustComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
