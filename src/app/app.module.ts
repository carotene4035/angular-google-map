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
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';

import { MarkersService } from './markers.service';
import { SurveyDetailImageComponent } from './survey-detail-image/survey-detail-image.component';
import { SurveyDetailImageListsComponent } from './survey-detail-image-lists/survey-detail-image-lists.component';
import { SurveyDetailImagePreviewDirective } from './survey-detail-image-preview.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SurveyListsComponent,
    SurveyDetailComponent,
    SurveyDetailImageComponent,
    SurveyDetailImageListsComponent,
    SurveyDetailImagePreviewDirective
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
      {path: "survey/detail/:id", component: SurveyDetailComponent }
    ]),
  ],
  providers: [
    MarkersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
