import { defineStore } from 'pinia';
import { type Ref, ref } from "vue";

export const useFormCreateCompanyStore = defineStore('formCreateCompanyStore', () => {
    const isFormOpen : Ref<boolean> = ref(false);

    const setIsFormOpen = (value) : void => {
        isFormOpen.value = value
    }

    return { isFormOpen, setIsFormOpen }
})