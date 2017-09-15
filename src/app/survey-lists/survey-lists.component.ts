import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { MarkersService } from '../markers.service';

@Component({
  selector: 'app-survey-lists',
  templateUrl: './survey-lists.component.html',
  styleUrls: ['./survey-lists.component.css'],
  providers: [ MarkersService ]
})
export class SurveyListsComponent implements OnInit {

  private markersService;

  private markers;

  constructor(markersService :MarkersService) {
    this.markersService = markersService;
  }

  /** マーカをサービスから取得 */
  ngOnInit() {
    this.markers = this.markersService.getMarkers();
  }
}
