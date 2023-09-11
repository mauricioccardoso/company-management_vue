<template>
  <div
      v-if="formCreateCompanyStore.isFormOpen"
      @click="formCreateCompanyStore.setIsFormOpen(false)"
      class="absolute top-0 left-0 h-full w-full z-10 bg-black opacity-50"
  >
  </div>

  <div
      v-if="formCreateCompanyStore.isFormOpen"
      class="absolute top-0 right-0 h-full w-full sm:w-4/6 lg:max-w-4xl z-20 bg-app-bg-secondary">
    <CompanyRegistrationForm class="overflow-y-auto"/>
  </div>
</template>

<script setup lang="ts">
import CompanyRegistrationForm from "@/components/Form/CompanyRegistrationForm.vue";
import { useFormCreateCompanyStore } from "@/stores/FormCreateCompanyStore";

const formCreateCompanyStore = useFormCreateCompanyStore();
</script>