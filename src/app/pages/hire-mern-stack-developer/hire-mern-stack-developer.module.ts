import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireMernStackDeveloperComponent } from './hire-mern-stack-developer.component';



@NgModule({
  declarations: [HireMernStackDeveloperComponent],
  imports: [
    CommonModule
  ],
  exports:[HireMernStackDeveloperComponent]
})
export class HireMernStackDeveloperModule { }
