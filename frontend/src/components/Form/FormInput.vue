<template>
  <div>
    <label :for="inputName" class="block leading-6">
      {{label}}
    </label>
    <div>
      <input
          v-model="value"
          @input="changeValue"
          v-bind="inputAttr"
          :type="inputType ?? 'text'"
          :id="inputName"
          :name="inputName"
          class="block w-full rounded-md border-0 p-1.5 pl-4 outline-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";

defineProps<{
  label: string
  inputName: string
  inputType?: string
  inputAttr ?: object
}>()

const emits = defineEmits(['inputValue']);

const value = ref('');

const changeValue = () => {
  emits('inputValue', value.value);
}

onUnmounted(() => {
  value.value = '';
})
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>