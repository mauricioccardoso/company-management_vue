import { defineStore } from 'pinia';
import { type Ref, ref } from "vue";
import type { ICompaniesData } from "@/interfaces/ICompaniesData";
import httpClient from "@/http";
import type { AxiosError, AxiosResponse } from "axios";
import { useNotificationStore } from "@/stores/NotificationStore";


export const useCompaniesDataStore = defineStore('companiesDataStore', () => {
    const notificationStore = useNotificationStore();
    const companies : Ref<ICompaniesData[]> = ref([]);

    const companySelectedData : Ref<ICompaniesData> = ref({});
    const openCardCompanyInfo : Ref<boolean> = ref(false);


    const getCompanies = async () => {
        const respData : any = await httpClient.get('/companies')
            .then(({ data } : AxiosResponse) => {
                return data;
            }).catch((error : AxiosError) => {
                return error;
            });

        if(!respData?.data) {
            notificationStore.showNotification("Falha ao carregar as informações das empresas!", 'error');
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

    const showSelectedCompany = (companyData: ICompaniesData) : void => {
        companySelectedData.value = companyData;
        openCardCompanyInfo.value = true;
    }

    const clearSelectedCompany = () : void => {
        delete companySelectedData.value;
        openCardCompanyInfo.value = false;
    }

    return { companies, companySelectedData, openCardCompanyInfo, getCompanies, showSelectedCompany, clearSelectedCompany }
});