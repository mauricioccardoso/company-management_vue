<template>
  <div class="min-h-screen w-full p-5">
    <HeaderCompaniesMap/>

    <MapLayout/>
  </div>
</template>
<script setup>
import HeaderCompaniesMap from "@/components/CompaniesMapView/HeaderCompaniesMap.vue";
import MapLayout from "@/components/CompaniesMapView/MapLayout.vue";
</script>