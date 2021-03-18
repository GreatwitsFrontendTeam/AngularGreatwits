import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrossPlatformAppComponent } from './cross-platform-app.component';



@NgModule({
  declarations: [CrossPlatformAppComponent],
  imports: [
    CommonModule
  ],
  exports:[CrossPlatformAppComponent]
})
export class CrossPlatformAppModule { }
