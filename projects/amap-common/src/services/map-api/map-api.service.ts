import { Injectable } from '@angular/core';
import { MapAPILoaderService } from '../map-api-loader/map-api-loader.service';

declare const AMap: any;

@Injectable()
export class MapAPIService {
  private _map: any;

  constructor(private loader: MapAPILoaderService) {
  }

  createMap(mapId: string, options: any): Promise<any> {

    return this.loader.load().then(() => {
      this._map = new AMap.Map(mapId, options);
      return this._map;
    });
  }

  destroyMap() {
    if (this._map) {
      this._map.clearMap();
      this._map.destroy();
    }
  }

  get map() {
    return this._map;
  }

}
