import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appSurveyImagePreview]'
})
export class SurveyImagePreviewDirective {

  @Input() image: any;

  constructor(
    // dom操作のためのモジュール
    private el: ElementRef,
  ) {}


  ngOnChanges(changes: SimpleChanges) {

    // html5のapi file reader
    let reader = new FileReader();
    // elはimagePreviewのdom
    let el = this.el;


    /*
     * サムネイルの表示
     */
    reader.onloadend = function (e) {
      el.nativeElement.src = reader.result;
    };

    if (this.image) {
      console.log(this.image);
      return reader.readAsDataURL(this.image);
    }

  }
}
