import { MarkerOption, EventTypes } from './entity';
declare const AMap: any;

export class Marker {

  private _marker: any;

  constructor(options: Partial<MarkerOption>) {
    this.initMarker(options);
  }

  /**
   * 覆盖物事件
   * @param eventType 事件类型
   * @param callback 回调
   */
  addMarkerListner(eventType: Partial<EventTypes>, callback) {
    this.marker.on(eventType, callback);
  }

  removeMarkerListner(eventType: Partial<EventTypes>, callback) {
    this.marker.off(eventType, callback);
  }

  private initMarker (options) {
    this.marker = new AMap.Marker(options);
  }

  get marker() {
    return this._marker;
  }

  set marker(value) {
    this._marker = value;
  }
}
