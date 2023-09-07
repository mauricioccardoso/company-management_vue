import { defineStore } from 'pinia';
import { type Ref, ref } from "vue";
import type { IUserData } from "@/interfaces/IUserData";


export const useUserDataStore = defineStore('userDataStore', () => {
    const userData : Ref<IUserData> = ref({})

    const setUserData = (data) : void => {
        userData.value = { ...data };
    }

    const clear = () : void => {
        delete userData.value.id;
        delete userData.value.name;
        delete userData.value.email;
        delete userData.value.email_verified_at;
    }

    return { userData, setUserData, clear }
})