import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustComponent } from './new-cust.component';

describe('NewCustComponent', () => {
  let component: NewCustComponent;
  let fixture: ComponentFixture<NewCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
