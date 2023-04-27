import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AlphaChildComponent } from './alpha-child/alpha-child.component';
import { BetaChildComponent } from './beta-child/beta-child.component';
import { GammaChildComponent } from './gamma-child/gamma-child.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaChildComponent,
    BetaChildComponent,
    GammaChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
