import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireAndroidDevelopersComponent } from './hire-android-developers.component';



@NgModule({
  declarations: [HireAndroidDevelopersComponent],
  imports: [
    CommonModule
  ],
  exports:[HireAndroidDevelopersComponent]
})
export class HireAndroidDevelopersModule { }
