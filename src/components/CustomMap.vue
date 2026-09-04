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

  const map = shallowRef<null | YMap>(null);

  const props = defineProps<{originalMarkArray: MapObject[], isVisible: boolean}>()

  const popupVisibleArray = ref<boolean[]>([]);
  for (let i = 0; i < props.originalMarkArray.length; i++){
    popupVisibleArray.value.push(false);
  }
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
    <div v-if="isVisible" class="map-marker" v-for="(marker, index) in originalMarkArray" :key="index">
      <yandex-map-default-marker v-if="marker.isVisible"
          :settings="{
            coordinates: [marker.longitude, marker.latitude],
            color: {day: marker.color, night: marker.color},
            popup: {position: 'top', show: popupVisibleArray[index]},
            onClick: ()=> popupVisibleArray[index] = !popupVisibleArray[index]
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