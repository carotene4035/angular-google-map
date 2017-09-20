import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { MarkersService } from '../markers.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-survey-lists',
  templateUrl: './survey-lists.component.html',
  styleUrls: ['./survey-lists.component.css'],
})
export class SurveyListsComponent implements OnInit {

  private subscription :Subscription;

  private markers;

  constructor(private markersService :MarkersService, private router :Router) {}

  /** マーカをサービスから取得 */
  ngOnInit() {

    // マーカを初期化
    this.markers = this.markersService.getAllMarkers();

    // ここで購読する
    this.subscription = this.markersService.toMarkerListsData$.subscribe(
      value => {
        console.log('リスト側で購読できたよ');
        this.markers = this.markersService.getAllMarkers();
      }
    );
  }

  cardClicked(markerId)
  {
    console.log(markerId);
    this.router.navigate(["survey/detail/" + markerId]);
  }
}
