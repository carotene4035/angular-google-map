import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../markers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit {

  private markersService;

  private marker;

  private markerId;

  constructor(markersService :MarkersService, route :ActivatedRoute) {
    this.markersService = markersService;
    this.markerId = route.snapshot.params['id'];
  }

  /** マーカをサービスから取得 */
  ngOnInit() {
    this.marker = this.markersService.getMarker(this.markerId);
  }

  /** マップ上でマーカのクリックがあったときに、対象マーカの書き換えを行う */

}
