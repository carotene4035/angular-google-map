import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
 * markerの情報を保持するサービス
 */
@Injectable()
export class MarkersService {

  /** 通知するオブジェクト */
  private toMarkerListsDataSource = new Subject<string>();
  private toMarkerMapDataSource   = new Subject<string>();

  /** 監視されるオブジェクト */
  /** 各コンポーネントで購読される */
  public toMarkerListsData$ = this.toMarkerListsDataSource.asObservable();
  public toMarkerMapData$   = this.toMarkerMapDataSource.asObservable();


  /** マーカの配列 */
  public markers;

  /** マーカに使用するラベル */
  private label = {
    color: "#fff",
    text: "!!!"
  };

  constructor()
  {
    this.markers = [];
  }

  /** マーカを1つ追加 */
  addMarker($event)
  {
    let id = this.markers.length;
    /** 新しいマーカの生成 */
    let marker = {
      id: id,
      lat: $event.coords.lat,
      lng: $event.coords.lng
    };

    /** 新しいマーカの追加 */
    this.markers.push(marker);

    this.toMarkerListsDataSource.next('マーカの個数を最新状態にするよ。');
    this.toMarkerMapDataSource.next('マーカの個数を最新状態にするよ。');
  }


  /** マーカをすべて取得 */
  getAllMarkers()
  {
    return this.markers;
  }

  /** 特定のマーカを取得 */
  getMarker(markerId)
  {
    let marker = this.markers.filter(function(marker, i, array) {
      return (marker.id == markerId);
    });
    return marker[0];
  }

  /** 特定のマーカを削除 */
  deleteMarker(markerId)
  {

  }
}
