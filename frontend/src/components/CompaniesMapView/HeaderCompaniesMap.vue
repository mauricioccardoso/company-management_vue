<template>
  <header class="flex justify-between">

    <!-- Search Input -->
    <label class="relative block sm:w-2/5 w-full mr-2 md:mr-0 font-semibold">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon class="ml-1 text-gray-400"/>
      </span>
      <input
          type="text" name="searchCompanies" id="searchCompanies" placeholder="Pesquisar"
          class="block w-full rounded-md border-0 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-600 py-3 pl-10 pr-3 text-app-label-primary placeholder:text-gray-400 sm:text-sm sm:leading-6"
      >
    </label>

    <!-- Add Company Button -->
    <button class="flex items-center bg-app-bg-primary-light text-app-label-primary hover:bg-blue-200 py-3 px-4 rounded-full sm:rounded-md text-sm">
      <span class="mr-3 hidden sm:block">Adicionar Empresa</span>
      <PlusIcon/>
    </button>

  </header>
</template>

<script setup lang="ts">

import SearchIcon from "@/components/Icons/SearchIcon.vue";
import PlusIcon from "@/components/Icons/PlusIcon.vue";
</script>