import { MapOption, EventTypes } from './entity';

declare const AMap: any;

export class GaoDeMap {

  private _gaodeMap: any;

  constructor (selectorID: string, option: Partial<MapOption>) {
    this.initMap(selectorID, option);
    this.initMapCycle();
  }

  /**
   * convert GPS to GCJ-02
   * @param gps GPS坐标
   * @param callback 回调
   */
  convertFrom (gps: number[], callback) {
    AMap.convertFrom(gps, 'gps', (status, result) => {
      if (result.info === 'ok') {
        callback(result);
      }
    });
  }

  /**
   * 地图事件
   * @param eventType 事件类型
   * @param callback 回调
   */
  addMapListner(eventType: Partial<EventTypes>, callback) {
    this.map.on(eventType, callback);
  }

  removeMapListner(eventType: Partial<EventTypes>, callback) {
    this.map.off(eventType, callback);
  }

  addMarker(marker) {
    this.map.add(marker);
  }

  removeMarker(marker) {
    this.map.removeMarker(marker);
  }

  getZoom() {
    return this.map.getZoom();
  }

  setZoom(level: number) {
    this.map.setZoom(level);
  }

  destroy() {
    this.map.destroy();
  }

  get map() {
    return this._gaodeMap;
  }

  set map(value) {
    this._gaodeMap = value;
  }

  private initMap (selectorID, option) {
    this.map = new AMap.Map(selectorID, option);
  }

  private initMapCycle () {
    this.map.on('complete', () => {
      console.log('map load completed');
    });
  }

}
