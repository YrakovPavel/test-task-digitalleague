<script setup lang="ts">
  import {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
    YandexMapDefaultSchemeLayer, YandexMapFeature
  } from "vue-yandex-maps";

  import type MapObject from "@/types/MapObject.ts";

  const mapModel: any = defineModel();

  defineProps<{
    originalMarkArray: MapObject[],
    colorGroups: any,
    isVisible: boolean
  }>()

</script>

<template>
  <yandex-map
      v-model="mapModel"
      :settings="{
        location: {
          center: [37.617644, 55.755819],
          zoom: 8,
        }
      }"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>

    <yandex-map-feature v-if="isVisible" v-for="[color, markers] in colorGroups" :key="color"
        :settings="{
            geometry: {
                type: 'LineString',
                coordinates: markers
            },
            style: {
                stroke: [{ color: color, width: 4 }],
            },
        }"
    />

    <div v-if="isVisible" class="map-marker" v-for="(marker, index) in originalMarkArray" :key="index">
      <yandex-map-default-marker v-if="marker.isVisible"
          :settings="{
            coordinates: [marker.longitude, marker.latitude],
            color: {day: marker.color, night: marker.color},
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