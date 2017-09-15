import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../markers.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkersService]
})
export class MapComponent implements OnInit {

  private markersService;

  constructor(markersService :MarkersService)
  {
    this.markersService = markersService;
  }

  ngOnInit() {
  }

  lat: number = 35.701702;
  lng: number = 139.751395;
  zoom: number = 18;


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
    this.markersService.getMarkers().forEach(function(marker, i, array) {
      if (marker.id == markerId) {
        console.log(marker.lat);
        console.log(marker.lng);
        // TODO:途中
      }
    });
  }
}