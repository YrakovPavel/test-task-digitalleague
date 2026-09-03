<script setup lang="ts">
  import ObjectCard from "@/components/ObjectCard.vue";
  import type MapObject from "@/types/MapObject.ts";
  import markers from "./mock.json"
  import { GoogleMap, Marker } from 'vue3-google-map'
  import {ref} from "vue";

  const center = { lat: 40.689247, lng: -74.044502 }

  let colorsArray: string[] = [];

  const showCards = ref<boolean>(true);

  //Возвращает готовый цвет, если такая цветовая группа уже существует
  //Иначе генерирует новый цвет
  function getColor(index: number){
    if (colorsArray[index]){
      return colorsArray[index];
    }
    let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorsArray[index] = newColor;
    return newColor;
  }

  const originalArray = markers.markers as MapObject[];
  const markerArray = originalArray.map((item) => {
    let titleArray = item.title.split(" ");
    return {...item, color: getColor(Number(titleArray[titleArray.length - 1]))}
  })

</script>

<template>
  <div class="main-window">
    <main>
      <GoogleMap
          api-key="AIzaSyB7-94v_wT0QS9MYZ6arI-fS_BhwOJjfFA"
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </main>
    <aside>
      <div class="button-panel">
        <button class="btn btn-danger" @click="showCards = false">Очистить</button>
        <button class="btn btn-primary" @click="showCards = true">Поиск</button>
      </div>
      <div v-if="showCards" class="object-cards">
        <ObjectCard
            v-for="marker in markerArray"
            :key="marker.id"
            :mapObject="marker"></ObjectCard>
      </div>
    </aside>
  </div>
</template>

<style scoped>
  .main-window{
    display: flex;
    height: 100%;
  }

  main{
    width: 70vw;
    height: 100%;
  }

  aside{
    display: flex;
    flex-direction: column;

    width: 30vw;
    height: 100%;
  }

  .button-panel{
    width: 100%;
    height: 10%;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;

    gap: 20px;
  }

  .btn{
    width: 35%;
    height: 70%;
    font-size: 18px;
  }

  .object-cards{
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    gap: 12px;
    overflow-y: auto;
    height: 87%;
    width: 100%;
  }

  @media(max-width: 768px) {
    .main-window {
      flex-direction: column;
    }
    main{
      height: 50%;
      width: 100%;
    }
    aside{
      height: 50%;
      width: 100%;
    }
  }

</style>
