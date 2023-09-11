<template>
  <div @click="isActive=!isActive">

    <!-- Field -->
    <label class="block leading-6">{{ label }}</label>
    <div class="relative">
      <button
          type="button"
          class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-2 pr-3 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
      <span class="flex items-center justify-between">
        <span
            :class="{'text-gray-400': selected.id === 0}"
            class="ml-2 mr-3 block truncate">

          {{ selected.title }}

        </span>
        <ArrowDownIcon/>
      </span>
      </button>

      <!-- Options List -->
      <ul

          v-if="isActive"
          role="listbox"
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto overflow-x-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >

        <li
            v-if="optionsData.length <= 0"
            role="option"
            class="text-app-label-primary relative cursor-default select-none py-1.5 pl-4 pr-9 hover:bg-gray-200">
          <span class="block"> {{ noItemsMsg ?? 'Carregando...' }} </span>
        </li>

        <!-- Options Itens -->
        <li
            v-for="item in optionsData" :key="item.id"
            @click="selectItem(item.id, item.title)"
            role="option"
            class="text-app-label-primary relative cursor-default select-none py-1.5 pl-4 pr-9 hover:bg-gray-200">
          <div class="flex items-center">

            <span class="block">{{ item.title }}</span>

          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArrowDownIcon from "@/components/Icons/ArrowDownIcon.vue";
import { onUnmounted, ref, watch } from "vue";

const props = defineProps<{
  label : string
  optionsData : Array<object>
  noItemsMsg? : string
}>();

const emits = defineEmits(['optionSelected']);

const isActive = ref(false);

const selected = ref({
  id: 0,
  title: 'Selecionar'
});

const selectItem = (id, title) => {
  selected.value.id = id;
  selected.value.title = title;
  emits('optionSelected', selected.value.id);
}

watch(() => props.optionsData.length, () => {
  selected.value.id = 0;
  selected.value.title = 'Selecionar';
})

onUnmounted(() => {
  selected.value.id = 0;
  selected.value.title = 'Selecionar';
})
</script>