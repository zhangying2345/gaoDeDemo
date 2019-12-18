import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MyLibModule } from 'my-lib';
import { FirstLeafletComponent } from './first-leaflet/first-leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLeafletComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyLibModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
