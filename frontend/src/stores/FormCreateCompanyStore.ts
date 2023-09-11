import { defineStore } from 'pinia';
import { type Ref, ref } from "vue";
import httpClient from "@/http";


export const useFormCreateCompanyStore = defineStore('formCreateCompanyStore', () => {
    const isFormOpen : Ref<boolean> = ref(false);

    const categories : Ref<[]> = ref([]);
    const states : Ref<[]> = ref([]);
    const cities : Ref<[]> = ref([]);

    const setIsFormOpen = (value) : void => {
        isFormOpen.value = value
    }

    const getCategories = async () : Promise<void> => {
        if(categories.value.length !== 0) {
            return;
        }
        const respData : any = await makeRequest('/categories');

        if(respData?.code) {
            return
        }

        categories.value = respData.map((category) => ({
            id: category.id,
            title: category.name
        }));
    }

    const getStates = async () : Promise<void> => {
        if(states.value.length !== 0) {
            return;
        }

        const respData : any = await makeRequest('/state-cities/states');

        if(respData?.code) {
            return
        }

        states.value = (respData);
    }

    const getCities = async (stateId) : Promise<void> => {
        cities.value = [];
        const respData : any = await makeRequest(`state-cities/cities?state_id=${ stateId }`);

        if(respData?.code) {
            return
        }

        cities.value = respData;
    }

    const createCompany = async (data) => {
        const respData = await httpClient.post('/companies', data)
            .then(({ data }) => {
                return data

            }).catch((error) => {
                return error
            });

        console.log('Make Error Message',respData);
    }

    const makeRequest = async (path) => {
        return httpClient.get(path)
            .then(({ data }) => {
                return data
            }).catch((error) => {
                return error
            });
    }

    return { isFormOpen, categories, states, cities, setIsFormOpen, getCategories, getStates, getCities, createCompany }
})