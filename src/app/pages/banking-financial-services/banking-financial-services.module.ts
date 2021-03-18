import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingFinancialServicesComponent } from './banking-financial-services.component';



@NgModule({
  declarations: [BankingFinancialServicesComponent],
  imports: [
    CommonModule
  ],
  exports:[BankingFinancialServicesComponent]
})
export class BankingFinancialServicesModule { }
