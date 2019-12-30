import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MyLibModule } from 'my-lib';
import { FirstLeafletComponent } from './first-leaflet/first-leaflet.component';
import { AmapCommonModule } from 'amap-common';

@NgModule({
  declarations: [
    AppComponent,
    FirstLeafletComponent,
  ],
  imports: [
    AmapCommonModule.forRoot({
      debug: false,
      apiKey: 'cf30f0b17a88f551b039b7fcdef7a5fb'
    }),
    BrowserModule,
    HttpClientModule,
    MyLibModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
