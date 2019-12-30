import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

//http://0x0803.top/2018/05/27/gis-leaflet-tutorials-map-layer/
//https://www.giserdqy.com/secdev/leaflet/26005/
@Component({
  selector: 'app-first-leaflet',
  templateUrl: './first-leaflet.component.html',
  styleUrls: ['./first-leaflet.component.css']
})
export class FirstLeafletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const map = L.map('map').setView([116.397428, 39.90923], 13);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // L.marker([51.5, -0.09]).addTo(map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();

    // const m = L.map('map-container').setView([36.52, 120.31], 7);
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //   maxZoom: 18,
    //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    //     '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //     'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //   id: 'mapbox.streets'
    // }).addTo(m);

    // L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}', {
    //   subdomains: ['1', '2', '3', '4'],
    // })
    // .addTo(map);
    // L.tileLayer.chinaProvider('GaoDe.Normal.Map',{maxZoom:18,minZoom:5}).addTo(map);
  }

}
