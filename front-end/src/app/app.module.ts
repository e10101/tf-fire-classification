import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  ExtractFramesModule,
} from './extract-frames';
import {
  TensorflowClassificationModule,
} from './tensorflow-classification';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExtractFramesModule,
    TensorflowClassificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
