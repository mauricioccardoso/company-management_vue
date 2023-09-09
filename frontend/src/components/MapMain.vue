<template>
  <div id="map" class="h-full w-full"></div>
</template>

<script setup lang="ts">
import 'ol/ol.css'

import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { fromLonLat } from "ol/proj";

import { onMounted } from "vue";

onMounted(() => {
  const map =  new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([-55.00000, -15.00000]),
      zoom: 5,
    }),
  });
});
</script>