import { NgModule, ModuleWithProviders } from '@angular/core';
import { AmapCommonComponent } from './amap-common.component';
import { MapAPILoaderService } from '../services/map-api-loader/map-api-loader.service';
import { MapAPIService } from '../services/map-api/map-api.service';
import { WindowRef, DocumentRef } from '../utils/browser-globals';
import { IMapAPILoaderConfig, MAP_API_CONFIG } from '../services/map-api-loader/map-api-loader.service';

@NgModule({
  imports: [
  ],
  declarations: [AmapCommonComponent],
  exports: [AmapCommonComponent]
})

export class AmapCommonModule {
  static forRoot(mapAPILoaderConfig?: IMapAPILoaderConfig): ModuleWithProviders {
    return {
      ngModule: AmapCommonModule,
      providers: [
        { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig },
        MapAPILoaderService,
        WindowRef,
        DocumentRef,
        MapAPIService,
      ]
    };
  }
}

export {
  MapAPILoaderService,
  MapAPIService,
  WindowRef, DocumentRef

};
