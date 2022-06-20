import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { circle, latLng, LeafletMouseEvent, marker, icon, Marker, polygon, tileLayer } from 'leaflet';
import { MapLocation } from 'src/app/_model/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Input()
  initialCoordinates: MapLocation[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<MapLocation>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
      attribution: 'Angular Movies' })
    ],
    zoom: 10,
    center: latLng(51.66574141105715,  -0.17578125)
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude, longitude});
    this.layers = [];
    this.layers.push(
      marker([latitude, longitude],{
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png',
        }),
      })
    );
    this.onSelectedLocation.emit({latitude, longitude});
  }
}

