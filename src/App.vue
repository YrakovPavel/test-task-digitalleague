<script setup lang="ts">
  import ObjectCard from "@/components/ObjectCard.vue";
  import type MapObject from "@/types/MapObject.ts";
  import markers from "./mock.json"
  import {ref} from "vue";
  import CustomMap from "@/components/CustomMap.vue";

  const markGroupArray = ref(new Map());

  //Разбивает маркеры по цветовым группам для отрисовки линий
  function setMarkGroupArray(array: MapObject[]){
    let markArray = new Map();
    for (const marker of array){
      if (marker.isVisible){
        if (markArray.has(marker.color)){
          markArray.set(marker.color, [...markArray.get(marker.color), [marker.longitude, marker.latitude]] )
        }
        else{
          markArray.set(marker.color, [[marker.longitude, marker.latitude]]);
        }
      }
    }
    return markArray;
  }

  //Обновляет массив линий
  function refreshMarkGroupArray(){
    markGroupArray.value = setMarkGroupArray(markerArray.value);
  }

  let colorsArray: string[] = [];

  //Возвращает готовый цвет, если такая цветовая группа уже существует
  //Иначе генерирует новый цвет
  function getColor(index: number){
    if (colorsArray[index]){
      return colorsArray[index];
    }
    let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    colorsArray[index] = newColor;
    return newColor;
  }

  const markerArray = ref<MapObject[]>((markers.markers.map((item) => {
    let titleArray = item.title.split(" ");
    return {
      ...item,
      color: getColor(Number(titleArray[titleArray.length - 1])),
      isVisible: true}
  })))

  refreshMarkGroupArray()

  const showMapObjects = ref<boolean>(true);

  //Изменяет видимость маркеров и линий в зависимости от входного параметра
  function changeMapObjectsVisibility(visible: boolean){
    showMapObjects.value = visible;
    markerArray.value.map((marker)=> marker.isVisible = visible);
    refreshMarkGroupArray()
  }

</script>

<template>
  <div class="main-window">
    <main>
      <CustomMap
          :originalMarkArray="markerArray"
          :colorGroups="markGroupArray"
          :isVisible="showMapObjects"></CustomMap>
    </main>
    <aside>
      <div class="button-panel">
        <button class="btn btn-danger" @click="changeMapObjectsVisibility(false)">Очистить</button>
        <button class="btn btn-primary" @click="changeMapObjectsVisibility(true)">Поиск</button>
      </div>
      <div v-if="showMapObjects" class="object-cards">
        <ObjectCard
            v-for="marker in markerArray"
            :key="marker.id"
            :mapObject="marker"
            @change-visibility="refreshMarkGroupArray"></ObjectCard>
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

    border-style:  none none none solid;
    border-color: lightgray;

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
