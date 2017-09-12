import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdCardModule,
} from '@angular/material';
import {
  AgmCoreModule,
  GoogleMapsAPIWrapper
} from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfnrYNQtMC-PqTWvH9F36TehlAN6Zw3MM'
    }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
