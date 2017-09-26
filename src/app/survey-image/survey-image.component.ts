import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-image',
  templateUrl: './survey-image.component.html',
  styleUrls: ['./survey-image.component.css']
})
export class SurveyImageComponent implements OnInit {
  @Input() partCode: string;
  @Input() partName: string;

  images: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  /** ドロップ成功時にここが見える */
  transferDataSuccess($event: any) {
    console.log($event.mouseEvent.dataTransfer);

    /** これだけで、ファイルの情報を取得することができるのか。。 */
    console.log($event.mouseEvent.dataTransfer.files);
    console.log($event.mouseEvent.dataTransfer.files[0]);

    let image = $event.mouseEvent.dataTransfer.files[0];
    this.images.push(image);
  }

}
