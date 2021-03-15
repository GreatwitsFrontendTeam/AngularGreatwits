import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireFrontendDevelopersComponent } from './hire-frontend-developers.component';



@NgModule({
  declarations: [HireFrontendDevelopersComponent],
  imports: [
    CommonModule
  ],
  exports:[HireFrontendDevelopersComponent]
})
export class HireFrontendDevelopersModule { }
