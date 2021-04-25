import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigRadioLibModule } from 'config-radio-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfigRadioLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
