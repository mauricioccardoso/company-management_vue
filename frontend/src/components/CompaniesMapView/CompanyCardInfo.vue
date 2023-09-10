<template>
  <div class="absolute bottom-10 left-10 min-w-80 h-40 bg-white rounded-lg drop-shadow-lg p-4 text-app-label-primary">

    <div class="flex justify-between items-center">
      <span class="font-bold text-md">
        {{ companiesDataStore?.companySelectedData?.name }}
      </span>
      <CompanyIcon/>
    </div>
    <div class="text-xs custom-margin">
      {{ companiesDataStore?.companySelectedData?.representantive_user }}
    </div>

    <div class="grid grid-cols-2 content-center gap-2 mt-3 text-xs">

      <div class="flex items-center text-gray-400">
        <EmailIcon class="mr-2"/>
        E-mail
      </div>
      <div>
        {{ companiesDataStore?.companySelectedData?.email }}
      </div>

      <div class="flex items-center text-gray-400">
        <MarkerIcon class="mr-2"/>
        Localização
      </div>
      <div>
        {{ companiesDataStore?.companySelectedData?.city?.title }} - {{ companiesDataStore?.companySelectedData?.state?.letter }}
      </div>

      <div class="flex items-center text-gray-400">
        <CategoryIcon class="mr-2"/>
        Categoria
      </div>
      <div class="bg-app-bg-primary-light w-fit py-0.5 px-2 rounded-full">
        {{ companiesDataStore?.companySelectedData?.category?.name }}
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CompanyIcon from "@/components/Icons/CompanyIcon.vue";
import EmailIcon from "@/components/Icons/EmailIcon.vue";
import MarkerIcon from "@/components/Icons/MarkerIcon.vue";
import CategoryIcon from "@/components/Icons/CategoryIcon.vue";
import { useCompaniesDataStore } from "@/stores/CompaniesDataStore";
import { onUnmounted } from "vue";

const companiesDataStore = useCompaniesDataStore();

onUnmounted(() => {
  companiesDataStore.clearSelectedCompany();
});
</script>

<style scoped>
</style>