import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { leftChildComponent } from './left-child/left-child.component';
import { middleChildComponent } from './middle-child/middle-child.component';
import { rightChildComponent } from './right-child/right-child.component';

@NgModule({
  declarations: [
    AppComponent,
    leftChildComponent,
    middleChildComponent,
    rightChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
