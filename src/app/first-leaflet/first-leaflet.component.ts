import { Component, OnInit } from '@angular/core';
declare const L: any;
@Component({
  selector: 'app-first-leaflet',
  templateUrl: './first-leaflet.component.html',
  styleUrls: ['./first-leaflet.component.css']
})
export class FirstLeafletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

}
