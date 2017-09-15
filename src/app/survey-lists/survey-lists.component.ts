import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { MarkersService } from '../markers.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-survey-lists',
  templateUrl: './survey-lists.component.html',
  styleUrls: ['./survey-lists.component.css'],
})
export class SurveyListsComponent implements OnInit {

  private markersService;

  private subscription :Subscription;

  private markers;

  constructor(markersService :MarkersService) {
    this.markersService = markersService;
  }

  /** マーカをサービスから取得 */
  ngOnInit() {
    this.subscription = this.markersService.getMarkers().subscribe(
      markers => { this.markers = markers; }
    );
  }
}
