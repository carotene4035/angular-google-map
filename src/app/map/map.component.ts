import { Component, OnInit } from '@angular/core';
import { MarkersService } from '../markers.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  /** マーカの配列 */
  private markers;

  private subscription :Subscription;

  private lat: number = 35.701702;
  private lng: number = 139.751395;
  private zoom: number = 18;

  /** mapやマーカがクリックできるかどうか */
  private clickable: boolean = true;


  constructor(private markersService :MarkersService, private router :Router)
  {
    this.markersService = markersService;
    this.markers = markersService.getAllMarkers();
  }

  ngOnInit()
  {
    // ここで購読する
    this.subscription = this.markersService.toMapMarkerData$.subscribe(
      value => {
        console.log('マップ側で購読できたよ');
        this.markers = this.markersService.getAllMarkers();
        console.log(this.markers);
      }
    );
  }


  /** mapをクリックした時 */
  mapClicked($event) {
    if (this.clickable == true) {
      let markerId = this.markersService.addMarker($event);
      this.router.navigate(["survey/detail/" + markerId]);
      this.clickable = false;
    }
  }

  /** markerをクリックした時 */
  markerClicked(markerId, infowindow) {
    if (this.clickable == true) {
      this.router.navigate(["survey/detail/" + markerId]);
      this.clickable = false;
    }
  }

  /** マーカの保存 */
  saveMarker(markerId, infowindow)
  {
    infowindow.close();
    this.clickable = true;
    this.router.navigate(["survey/lists"]);
  }

  /** マーカの削除 */
  deleteMarker(markerId, infowindow)
  {
    infowindow.close();
    this.markersService.deleteMarker(markerId);
    this.clickable = true;
    this.router.navigate(["survey/lists"]);
  }

}
