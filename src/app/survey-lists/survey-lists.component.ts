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

  private subscription :Subscription;

  private markers;

  constructor(private markersService :MarkersService) {}

  /** マーカをサービスから取得 */
  ngOnInit() {
    // ここで購読する
    this.subscription = this.markersService.toMarkerListsData$.subscribe(
      value => console.log(value)
    );
  }
}
