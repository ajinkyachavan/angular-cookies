import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PraccookieComponent } from './praccookie/praccookie.component';

import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    PraccookieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
