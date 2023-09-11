import { defineStore } from 'pinia';
import { type Ref, ref } from "vue";
import httpClient from "@/http";
import { useCompaniesDataStore } from "@/stores/CompaniesDataStore";
import { useNotificationStore } from "@/stores/NotificationStore";


export const useFormCreateCompanyStore = defineStore('formCreateCompanyStore', () => {
    const companiesDataStore = useCompaniesDataStore();
    const notificationStore = useNotificationStore();

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
            notificationStore.showNotification("Falha ao carregar as categorias. Tente novamente mais tarde!", 'error');
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
            notificationStore.showNotification("Falha ao carregar as Estados. Tente novamente mais tarde!", 'error');
            return
        }

        states.value = (respData);
    }

    const getCities = async (stateId) : Promise<void> => {
        cities.value = [];
        const respData : any = await makeRequest(`state-cities/cities?state_id=${ stateId }`);

        if(respData?.code) {
            notificationStore.showNotification("Falha ao carregar as Cidades. Tente novamente mais tarde!", 'error');
            return
        }

        cities.value = respData;
    }

    const createCompany = async (data) => {
        const respData :any = await httpClient.post('/companies', data)
            .then(({ data }) => {
                return data

            }).catch((error) => {
                return error
            });

        if(respData?.code) {
            notificationStore.showNotification("Erro ao cadastrar Empresa!", 'error');
            return;
        }

        notificationStore.showNotification("Empresa cadastrada com sucesso!", 'success');

        setIsFormOpen(false)
        await companiesDataStore.getCompanies();
    }

    const validateCompanyData = (data) => {
        const erros: string[] = [];

        const validateFields = {
            name: 'Nome',
            city_id: 'Cidade',
            cnpj: 'CNPJ',
            email: 'E-mail',
            state_id: 'Estado',
            category_id: 'Categoria',
            latitude: 'Latitude',
            longitude: 'Longitude',
            whatsapp_phone: 'Número de WhatsApp',
        };

        for (const key in validateFields) {
            if (!data.hasOwnProperty(key)) {
                const nomeCampo = validateFields[key];
                erros.push(`O campo ${nomeCampo} não está preenchido.`);
            }
        }

        if(erros.length > 0) {
            return erros;
        }

        if (data.city_id === 0 || data.state_id === '0' || data.category_id === 0) {
            erros.push('Cidade, Estado e Categoria devem ser preenchidos');
        }

        if (!/^\d{14}$/.test(data.cnpj)) {
            erros.push('O CNPJ deve conter 14 números.');
        }

        if (!/^\d{11}$/.test(data.whatsapp_phone)) {
            erros.push('O número de WhatsApp deve conter 11 números.');
        }

        if (typeof data.latitude !== 'number' || isNaN(data.latitude) || typeof data.longitude !== 'number' || isNaN(data.longitude)) {
            erros.push('Latitude e longitude devem ser números e ter pelo menos 1 dígito.');
        }

        return erros;
    }

    const makeRequest = async (path) => {
        return httpClient.get(path)
            .then(({ data }) => {
                return data
            }).catch((error) => {
                return error
            });
    }

    return { isFormOpen, categories, states, cities, setIsFormOpen, getCategories, getStates, getCities, createCompany, validateCompanyData }
})