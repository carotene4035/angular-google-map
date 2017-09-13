import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lat: number = 35.701702;
  lng: number = 139.751395;
  zoom: number = 18;

  label = {
    color: "#fff",
    text: "!!!"
  };

  private markers = [
    {id: 1, lat: 35.701702, lng: 139.751395, label: this.label},
    {id: 2, lat: 35.701902, lng: 139.751395},
    {id: 3, lat: 35.701202, lng: 139.751395},
  ];

  /** マーカの保存 */
  saveMarker(index, markerId)
  {
  }


  /** マーカの削除 */
  deleteMarker(markerId)
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

  /** mapをクリックした時 */
  mapClicked($event) {
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

  /** mapをクリックした時 */
  cardClicked(markerId) {
    console.log(markerId);
    this.markers.forEach(function(marker, i, array) {
      if (marker.id == markerId) {
        console.log(marker.lat);
        console.log(marker.lng);
        // TODO:途中
      }
    });
  }
}
