<template>
  <main class="w-full bg-blue-200 mt-5 rounded-lg overflow-hidden relative">
    <MapMain/>

    <div v-show="companiesDataStore.openCardCompanyInfo">
      <CompanyCardInfo/>
    </div>
  </main>
</template>

<script setup lang="ts">
import MapMain from "@/components/MapMain.vue";
import CompanyCardInfo from "@/components/CompaniesMapView/CompanyCardInfo.vue";
import { useCompaniesDataStore } from "@/stores/CompaniesDataStore";

const companiesDataStore = useCompaniesDataStore();
</script>

<style scoped>
main {
  height: calc(100% - 68px);
}
</style>