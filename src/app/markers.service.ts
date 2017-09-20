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
      {id: 1, lat: 35.701702, lng: 139.751395, label: this.label},
      {id: 2, lat: 35.701902, lng: 139.751395},
      {id: 3, lat: 35.701202, lng: 139.751395},
    ];
  }

  /** マーカを1つ追加 */
  addMarker()
  {
    this.toMarkerListsDataSource.next('きたよぉ');
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
