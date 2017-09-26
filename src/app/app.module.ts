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
import { DndModule } from 'ng2-dnd';

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
import { SurveyComponent } from './survey/survey.component';

import { MarkersService } from './markers.service';
import { SurveyImageComponent } from './survey-image/survey-image.component';
import { SurveyImageListsComponent } from './survey-image-lists/survey-image-lists.component';
import { SurveyImagePreviewDirective } from './survey-image-preview.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SurveyListsComponent,
    SurveyComponent,
    SurveyImageComponent,
    SurveyImageListsComponent,
    SurveyImagePreviewDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DndModule.forRoot(),
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
      {path: "survey/:id", component: SurveyComponent }
    ]),
  ],
  providers: [
    MarkersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
