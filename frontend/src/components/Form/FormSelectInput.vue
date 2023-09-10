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

          {{ selected.text }}

        </span>
        <ArrowDownIcon/>
      </span>
      </button>

      <!-- Options List -->
      <ul
          @mouseleave="isActive=false"
          v-if="isActive"
          role="listbox"
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >

        <!-- Options Itens -->
        <li
            v-for="item in optionsData" :key="item.id"
            @click="selectItem(item.id, item.text)"
            role="option"
            class="text-app-label-primary relative cursor-default select-none py-1.5 pl-4 pr-9 hover:bg-gray-200">
          <div class="flex items-center">

            <span class="block">{{ item.text }}</span>

          </div>
        </li>

      </ul>
    </div>
  </div>

</template>
<script setup lang="ts">
import ArrowDownIcon from "@/components/Icons/ArrowDownIcon.vue";
import { ref } from "vue";

defineProps<{
  label : string
  optionsData: object
}>();

const emits = defineEmits(['optionSelected']);

const isActive = ref(false);

const selected = ref({
  id: 0,
  text: 'Selecionar'
});

const selectItem = (id, text) => {
  selected.value.id = id;
  selected.value.text = text;
  emits('optionSelected', selected.value.id);
}
</script>