import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TensorflowClassificationComponent } from './tensorflow-classification.component';



@NgModule({
  declarations: [
    TensorflowClassificationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TensorflowClassificationComponent,
  ],
})
export class TensorflowClassificationModule { }
