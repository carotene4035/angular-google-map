import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../markers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  private markersService;

  private marker;

  private markerId;

  private subscription :Subscription;

  constructor(markersService :MarkersService, route :ActivatedRoute, router :Router) {
    this.markersService = markersService;
    this.markerId = route.snapshot.params['id'];

//    // ここで購読する
//    this.subscription = this.markersService.toDetailMarkerData$.subscribe(
//      marker => {
//        this.marker = marker;
//      }
//    );
  }

  /** マーカをサービスから取得 */
  ngOnInit() {
    this.markersService.setDetailMarker(this.markerId);
    this.marker = this.markersService.getMarker();
  }

  /** マップ上でマーカのクリックがあったときに、対象マーカの書き換えを行う */

}
