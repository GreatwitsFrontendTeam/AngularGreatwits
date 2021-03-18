import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileApplicationDevelopmentComponent } from './mobile-application-development.component';



@NgModule({
  declarations: [MobileApplicationDevelopmentComponent],
  imports: [
    CommonModule
  ],
  exports:[MobileApplicationDevelopmentComponent]
})
export class MobileApplicationDevelopmentModule { }
