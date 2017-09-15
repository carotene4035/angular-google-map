import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../markers.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css'],
  providers: [ MarkersService ]
})
export class SurveyDetailComponent implements OnInit {

  private markersService;

  private marker;

  constructor(markersService :MarkersService) {
    this.markersService = markersService;
  }

  /** マーカをサービスから取得 */
  ngOnInit() {
    this.marker = this.markersService.getMarker();
  }

}
