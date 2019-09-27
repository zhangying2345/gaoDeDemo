export interface MapOption {
  // 级别
  zoom: number;
  // 中心点坐标
  center: number[];
  // 3D?
  viewMode: string;
  // 是否可以resize
  resizeEnable: boolean;
}

export enum EventTypes {
  RESIZE = 'resize',
  CLICK = 'click',
  ZOOMEND = 'zoomend'
}

export interface MarkerOption {
  position: any;
  offset: any;
  icon: any;
  content: any;
  title: string;
  zoom: number;
}
