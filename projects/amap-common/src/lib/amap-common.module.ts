import { NgModule } from '@angular/core';
import { AmapCommonComponent } from './amap-common.component';
import { MapAPILoaderService } from '../services/map-api-loader/map-api-loader.service';
import { WindowRef, DocumentRef } from '../utils/browser-globals';

@NgModule({
  imports: [
  ],
  declarations: [AmapCommonComponent],
  exports: [AmapCommonComponent]
})
export class AmapCommonModule {
  static forRoot() {
    return {
      NgModule: AmapCommonModule,
      providers: [
        MapAPILoaderService,
        WindowRef,
        DocumentRef,
      ]
    };
  }
}
