import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevopsDevelopmentComponent } from './devops-development.component';



@NgModule({
  declarations: [DevopsDevelopmentComponent],
  imports: [
    CommonModule
  ],
  exports:[DevopsDevelopmentComponent]
})
export class DevopsDevelopmentModule { }
