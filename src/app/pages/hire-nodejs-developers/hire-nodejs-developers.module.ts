import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireNodejsDevelopersComponent } from './hire-nodejs-developers.component';



@NgModule({
  declarations: [HireNodejsDevelopersComponent],
  imports: [
    CommonModule
  ],
  exports:[HireNodejsDevelopersComponent]
})
export class HireNodejsDevelopersModule { }
