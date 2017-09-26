import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-detail-image-lists',
  templateUrl: './survey-detail-image-lists.component.html',
  styleUrls: ['./survey-detail-image-lists.component.css']
})
export class SurveyDetailImageListsComponent implements OnInit {
  @Input() marker;

  private partName1 = '全体';
  private partName2 = '柱脚部';
  private partName3 = '開口部';
  private partName4 = '一般部';
  private partName5 = '取付部';
  private partName6 = 'バンド部';
  private partName7 = 'その他'
  constructor() { }

  ngOnInit() {
  }

}
