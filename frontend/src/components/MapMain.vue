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

import { onMounted, onUnmounted, ref, watch } from "vue";
import { useCompaniesDataStore } from "@/stores/CompaniesDataStore";
import { useMapMarkersDataStore } from "@/stores/MapMarkers";

const companiesDataStore = useCompaniesDataStore();
companiesDataStore.getCompanies();

const mapMarkersDataStore = useMapMarkersDataStore();

const map = ref();

onMounted(() => {
  map.value = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([-55.00000, -14.00000]),
      zoom: 5,
    }),
  });
});

onUnmounted(() => {
  mapMarkersDataStore.resetConfigs();
});

watch(companiesDataStore.companies, () => {
  mapMarkersDataStore.buildMarkers(companiesDataStore.companies, map);
})
</script>