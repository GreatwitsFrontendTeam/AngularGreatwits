import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebApplicationDevelopmentComponent } from './web-application-development.component';



@NgModule({
  declarations: [WebApplicationDevelopmentComponent],
  imports: [
    CommonModule
  ],
  exports:[WebApplicationDevelopmentComponent]
})
export class WebApplicationDevelopmentModule { }
