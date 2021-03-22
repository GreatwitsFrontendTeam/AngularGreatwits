import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireVuejsDevelopersComponent } from './hire-vuejs-developers.component';



@NgModule({
  declarations: [HireVuejsDevelopersComponent],
  imports: [
    CommonModule
  ],
  exports:[HireVuejsDevelopersComponent]
})
export class HireVuejsDevelopersModule { }
