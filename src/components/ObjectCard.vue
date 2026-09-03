<script setup lang="ts">
  import type MapObject from "@/types/MapObject.ts";
  defineProps<{mapObject: MapObject}>()
</script>

<template>
  <div class="card">
    <span class="card__badge" :style="{backgroundColor: mapObject.color}"></span>
    <h5 class="card__title">{{ mapObject.title }}</h5>
    <div class="card__checkbox">
      <input type="checkbox" checked> Показать
    </div>
    <div class="card__description">
      <b>{{ mapObject.description }}</b>
    </div>
  </div>
</template>

<style scoped>
  .card{
    border-color: black;
    border-style: solid;
    display: grid;
    grid-template-areas: "mark title space checkbox"
                         "mark desc desc desc";
    grid-auto-columns: 2fr 2fr 1fr 2fr;
    align-items: center;
    padding: 10px;
    gap: 6px;
    border-radius: 15px;
    width: 90%;
    height: 100%;
  }

  .card__badge{
    grid-area: mark;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
  .card__title{
    grid-area: title;
  }
  .card__description{
    grid-area: desc;
  }
  .card__checkbox{
    grid-area: checkbox;
  }
</style>