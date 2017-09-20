import { Component, OnInit } from '@angular/core'; import { MarkersService } from '../markers.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  /** マーカの配列 */
  private markers;

  private subscription :Subscription;

  lat: number = 35.701702;
  lng: number = 139.751395;
  zoom: number = 18;

  constructor(private markersService: MarkersService)
  {
    this.markersService = markersService;
    this.markers = markersService.getAllMarkers();
  }

  ngOnInit()
  {
    // ここで購読する
    this.subscription = this.markersService.toMarkerMapData$.subscribe(
      value => {
        console.log('マップ側で購読できたよ');
        this.markers = this.markersService.getAllMarkers();
        console.log(this.markers);
      }
    );
  }


  /** マーカの保存 */
  saveMarker(index, markerId)
  {
  }


  /** マーカの削除 */
  deleteMarker(markerId)
  {
    this.markersService.deleteMarker(markerId);
  }

  /** mapをクリックした時 */
  mapClicked($event) {
    this.markersService.addMarker($event);
  }

  /** mapをクリックした時 */
  cardClicked(markerId) {
//    this.markers.forEach(function(marker, i, array) {
//      if (marker.id == markerId) {
//        console.log(marker.lat);
//        console.log(marker.lng);
//        // TODO:途中
//      }
//    });
  }
}
