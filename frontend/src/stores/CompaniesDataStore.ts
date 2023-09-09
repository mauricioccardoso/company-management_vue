import { defineStore } from 'pinia';
import { type Ref, ref } from "vue";
import type { ICompaniesData } from "@/interfaces/ICompaniesData";
import httpClient from "@/http";
import type { AxiosError, AxiosResponse } from "axios";


export const useCompaniesDataStore = defineStore('companiesDataStore', () => {
    const companies : Ref<ICompaniesData[]> = ref([])

    const getCompanies = async () => {
        const respData = await httpClient.get('/companies')
            .then(({ data } : AxiosResponse) => {
                return data
            }).catch((error : AxiosError) => {
                return error
            });

        if(!respData?.data) {
            console.log('Make List Companies Error Alert');
            return;
        }

        for (const item of respData?.data) {
            const company = {
                id: item.id,
                name: item.name,
                representantive_user: item.representantive_user,
                email: item.email,
                latitude: parseFloat(item.latitude),
                longitude: parseFloat(item.longitude),
                city: {
                    id: item.city.id,
                    title: item.city.title,
                },
                state: {
                    id: item.state.id,
                    title: item.state.title,
                    letter: item.state.letter
                },
                category: {
                    id: item.category.id,
                    name: item.category.name
                }
            };
            companies.value.push(company);
        }
    }

    return { companies, getCompanies }
});