import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
 * markerの情報を保持するサービス
 */
@Injectable()
export class MarkersService {

  /** 通知するオブジェクト */
  private toMarkerListsDataSource = new Subject<string>();

  /** 監視されるオブジェクト */
  /** 各コンポーネントで購読される */
  public toMarkerListsData$ = this.toMarkerListsDataSource.asObservable();


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
      {lat: 35.701702, lng: 139.751395, label: this.label},
      {lat: 35.701902, lng: 139.751395},
      {lat: 35.701202, lng: 139.751395},
    ];
  }

  /** マーカを1つ追加 */
  addMarker($event)
  {
    // listデータソースに通知

    console.log($event.coords);
    let marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng
    };
    this.markers.push(marker);
    this.toMarkerListsDataSource.next('マーカの個数を最新状態にするよ。');
  }

  /** マーカをすべて取得 */
  getAllMarkers()
  {
    return this.markers;
  }

  /** 特定のマーカを取得 */
  getMarker(markerId)
  {

  }

  /** 特定のマーカを削除 */
  deleteMarker(markerId)
  {

  }
}
