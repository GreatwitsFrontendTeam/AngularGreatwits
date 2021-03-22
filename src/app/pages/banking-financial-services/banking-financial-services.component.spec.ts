import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingFinancialServicesComponent } from './banking-financial-services.component';

describe('BankingFinancialServicesComponent', () => {
  let component: BankingFinancialServicesComponent;
  let fixture: ComponentFixture<BankingFinancialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingFinancialServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingFinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
