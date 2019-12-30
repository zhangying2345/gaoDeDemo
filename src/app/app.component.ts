import { Component, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyLibComponent } from 'my-lib';

import { GaoDeMap } from '../utils/map';
import { Marker } from '../utils/marker';
import { EventTypes } from 'src/utils/entity';
import { MapAPIService } from 'amap-common';
declare const AMap: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private apiService: MapAPIService,
    private el: ElementRef
    ) {

  }
  /* check = true;

  name = new FormControl('zhangying', [
    Validators.required,
    Validators.minLength(4)
  ]);

  getClass(invalid) {
    console.log('zhangying->invalid');
    if (invalid) {
      return { 'div-invalid': invalid }
    }
  } */

  ngOnInit() {
    // let map = new GaoDeMap('container', {
    //   zoom: 13,
    //   center: [116.397428, 39.90923],
    // });

    // let marker = new Marker({
    //   content: `<div class="marker-route"><img alt="T"><span class="marker-route-sp">平凉</span></div>`,
    //   // content: "<div class = 'taiwan'>宝岛台湾</div>",
    //   position: new AMap.LngLat(116.397428, 39.90923),
    //   offset: new AMap.Pixel(-8, -11),
    //   title: 'test',
    // });

    // map.addMarker(marker.marker);

    // marker.addMarkerListner(EventTypes.CLICK, (ev) => {
    //   console.log('zhangying->', ev);
    // });
    this.apiService.createMap('map-con', {}).then((map) => {
      console.log('zhangying->res', map);
    });

  }

}
