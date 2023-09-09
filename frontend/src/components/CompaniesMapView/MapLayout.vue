<template>
  <main class="w-full bg-blue-200 mt-5 rounded-lg overflow-hidden">
    <MapMain/>
  </main>
</template>

<script setup lang="ts">
import MapMain from "@/components/MapMain.vue";
</script>

<style scoped>
main {
  height: calc(100% - 68px);
}
</style>