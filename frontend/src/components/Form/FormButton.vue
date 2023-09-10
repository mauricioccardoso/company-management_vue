<template>
  <button
      @click="cbFunction"
      :class="computedClasses"
      :type="type"
      class="w-60 mt-3 text-sm sm:text-base px-4 py-2 rounded-md md:py-3">
    {{ label }}
  </button>
</template>

<script setup lang="ts">

import { computed } from "vue";

const props = defineProps<{
  label : string
  type: string
  customClasses? : string
  cbFunction? : Function
}>()

const computedClasses = computed(() => {
  const defaultClasses = 'hover:text-blue-700 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 focus-visible:text-blue-700';
  if(props.customClasses) {
    return props.customClasses;
  }
  return defaultClasses;
});
</script>