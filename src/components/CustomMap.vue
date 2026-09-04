<script setup lang="ts">
  import {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
    YandexMapDefaultSchemeLayer
  } from "vue-yandex-maps";

  import {ref, shallowRef} from "vue";
  import type {YMap} from "@yandex/ymaps3-types";
  import type MapObject from "@/types/MapObject.ts";
  import type MapMarker from "@/types/MapMarker.ts";
  import type { LngLat } from '@yandex/ymaps3-types';
  import type {MarkerColorProps} from "@yandex/ymaps3-default-ui-theme/dist/types/markers/YMapDefaultMarker";

  const map = shallowRef<null | YMap>(null);

  const props = defineProps<{originalMarkArray: MapObject[]}>()

  let markArray= ref<MapMarker[]>(props.originalMarkArray.map((mark)=>{
    return {
      ...mark,
      coordinates: [mark.longitude, mark.latitude],
      color: {day: mark.color, night: mark.color} as MarkerColorProps,
      isVisible: mark.isVisible,
      popupVisible: false,
    }
  }))
</script>

<template>
  <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [37.617644, 55.755819],
          zoom: 8,
        }
      }"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>
    <div class="map-marker" v-for="(marker, index) in markArray" :key="index">
      <yandex-map-default-marker v-if="marker.isVisible"
          :settings="{
            coordinates: marker.coordinates as LngLat,
            color: marker.color,
            popup: {position: 'top', show: marker.popupVisible},
            onClick: ()=> marker.popupVisible = !marker.popupVisible
        }">
        <template #popup>
          <div class="marker-popup">
            <h5>{{marker.title}}</h5>
            <label>{{marker.description}}</label>
          </div>
        </template>
      </yandex-map-default-marker>
    </div>
  </yandex-map>
</template>

<style scoped>

</style>