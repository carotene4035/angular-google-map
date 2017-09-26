import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
 * markerの情報を保持するサービス
 */
@Injectable()
export class MarkersService {

  /** 通知するオブジェクト */
  private toListsMarkerDataSource    = new Subject<string>();
  private toMapMarkerDataSource      = new Subject<string>();
  private toDetailMarkerDataSource   = new Subject<string>();

  /** 監視されるオブジェクト */
  /** 各コンポーネントで購読される */
  public toListsMarkerData$  = this.toListsMarkerDataSource.asObservable();
  public toMapMarkerData$    = this.toMapMarkerDataSource.asObservable();
  public toDetailMarkerData$ = this.toDetailMarkerDataSource.asObservable();


  /** マーカ全部の配列 */
  private markers;

  /** マーカの配列 */
  private marker;

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

    this.toMapMarkerDataSource.next('マーカの個数を最新状態にするよ。');
    this.toListsMarkerDataSource.next('マーカの個数を最新状態にするよ。');
    return id;
  }


  /** マーカをすべて取得 */
  getAllMarkers()
  {
    return this.markers;
  }

  /** 特定のマーカを取得 */
  setDetailMarker(markerId)
  {
    let marker = this.markers.filter(function(marker, i, array) {
      return (marker.id == markerId);
    });
    this.marker = marker[0];
  }

  getMarker()
  {
    return this.marker;
  }


  /** 特定のマーカを削除 */
  deleteMarker(markerId)
  {

  }
}
