import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

/*
 * markerの情報を保持するサービス
 */
@Injectable()
export class MarkersService {
  private subject = new Subject<any>();

  /** マーカの配列 */
  public markers;

  /** マーカに使用するラベル */
  private label = {
    color: "#fff",
    text: "!!!"
  };

  constructor()
  {
    this.markers = [
      {id: 1, lat: 35.701702, lng: 139.751395, label: this.label},
      {id: 2, lat: 35.701902, lng: 139.751395},
      {id: 3, lat: 35.701202, lng: 139.751395},
    ];
  }

  updateMarkers()
  {
    this.subject.next({markers: this.markers});
  }


  /** マーカの削除 */
  deleteMarker(markerId) :void
  {
    confirm('ほんとに消す？');
    let delIndex;
    this.markers.forEach(function(marker, i, array) {
      if (marker.id == markerId) {
        delIndex = i;
      }
    });
    console.log(delIndex);
    this.markers.splice(delIndex, 1);
  }

  /** マーカの追加 */
  addMarker($event) :void
  {
    let count = this.markers.length;

    this.markers.push({
      id: count,
      lat: $event.coords.lat,

      lng: $event.coords.lng,
      label : {
        color: "#000",
        text: count.toString()
      }
    });
  }

  /** マーカをすべて取得 */
  getMarkers() :Observable<any>
  {
    return this.subject.asObservable();
  }

  /** 特定のマーカを取得 */
  getMarker(markerId)
  {
  }
}
