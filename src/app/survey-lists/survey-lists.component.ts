import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-survey-lists',
  templateUrl: './survey-lists.component.html',
  styleUrls: ['./survey-lists.component.css']
})
export class SurveyListsComponent implements OnInit {

  @Input() markers;

  constructor() { }

  ngOnInit() {
  }

}
