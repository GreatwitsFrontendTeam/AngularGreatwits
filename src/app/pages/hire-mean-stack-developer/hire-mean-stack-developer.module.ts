import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireMeanStackDeveloperComponent } from './hire-mean-stack-developer.component';



@NgModule({
  declarations: [HireMeanStackDeveloperComponent],
  imports: [
    CommonModule
  ],
  exports:[HireMeanStackDeveloperComponent]
})
export class HireMeanStackDeveloperModule { }
