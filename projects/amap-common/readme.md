#### 用法
##### 1. 在module中引入AmapCommonModule，并在imports处执行forRoot函数

```javascript
import { AmapCommonModule } from 'amap-common';
@NgModule({
  imports: [
    AmapCommonModule.forRoot({
      debug: false,
      apiKey: 'cf30f0b17a88f551b039b7fcdef7a5fb'
    }),
  ]
})
```

其中forRoot参数是：
- apiKey： 地图的key
- apiVersion：地图版本

##### 2. 在component中引入MapAPIService，并调用createMap(mapDivId, mapOptions), 调用成功后返回地图实例

```javascript
import { MapAPIService } from 'amap-common';
this.mapAPIService.createMap('mapDivId', MapOptions).then((map) => {
  console.log('map-instance', map);
});
```