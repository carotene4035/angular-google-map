import { RouterModule, Routes } from '@angular/router';

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
import { MapComponent } from './map/map.component';
import { SurveyListsComponent } from './survey-lists/survey-lists.component';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SurveyListsComponent,
    SurveyDetailComponent
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
    MdCardModule,
    RouterModule.forRoot([
      {path: "survey/lists", component: SurveyListsComponent },
      {path: "survey/detail/:id", component: SurveyDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
