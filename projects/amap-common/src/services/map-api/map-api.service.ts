import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapAPILoaderService } from '../map-api-loader/map-api-loader.service';

declare const AMap: any;

@Injectable()
export class MapAPIService {
  TAG = 'map-api';
  private _map: any;
  private _mapPromise: Promise<any>;
  private _mapResolver: (map?: any) => void;

  constructor(private loader: MapAPILoaderService) {
    this._mapPromise = new Promise(resolve => this._mapResolver = resolve);
  }

  createMap(mapId: string, options: any): Promise<any> {

    return this.loader.load().then(() => {
      this._map = new AMap.Map(mapId, options);
      this._mapResolver(this._map);
      return this._map;
    });
  }

  destroyMap() {
    this._mapPromise.then(map => {
      map.clearMap();
      map.destroy();
    });
  }

  get map(): Promise<any> {
    return this._mapPromise;
  }

}
