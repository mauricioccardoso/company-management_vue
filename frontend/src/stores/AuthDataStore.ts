import { defineStore } from 'pinia';
import httpClient from "@/http";
import type { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import { type Ref, ref } from "vue";
import type { IAuthData } from "@/interfaces/IAuthData";
import { useUserDataStore } from "@/stores/UserDataStore";
import { type Router, useRouter } from "vue-router";



export const useAuthDataStore = defineStore('authDataStore', () => {
    const router : Router = useRouter();
    const userDataStore = useUserDataStore();

    const authData : Ref<IAuthData> = ref({});
    const isAuth = ref(false);

    if(sessionStorage.getItem("ACCESS_TOKEN")) {
        authData.value.access_token = sessionStorage.getItem("ACCESS_TOKEN");
    }

    const setAuthData = (data) : void => {
        authData.value.access_token = data.access_token;
        authData.value.token_type = data.token_type;
        authData.value.expires_in = data.expires_in;

        sessionStorage.setItem("ACCESS_TOKEN", authData.value.access_token);
    }

    const setIsAuth = (auth: boolean) : void => {
        isAuth.value = auth;
    }

    const checkToken = async (): Promise<void> => {

        const respData = await httpClient.get('/auth/me')
            .then(({data}: AxiosResponse) =>{
                return data
            }).catch((error: AxiosError) => {
                return error
            })

        if(respData?.code) {
            await clear();
            return;
        }

        setIsAuth(true)
        userDataStore.setUserData(respData);
    }

    const clear = async () : Promise<void> => {
        userDataStore.clear();
        sessionStorage.clear();
        setIsAuth(false);

        delete authData.value.access_token;
        delete authData.value.token_type;
        delete authData.value.expires_in;

        await router.push({ name: 'login' });
    }

    const login = async (data): Promise<void> => {
        const respData = await makeLoginRequest(data);

        if(respData?.code) {
            console.log("Make alert - System unavailable");
            return;
        }

        if(respData?.message) {
            console.log("Make alert - Credential wrong");
            return;
        }

        setIsAuth(true);
        setAuthData(respData);
        userDataStore.setUserData(respData?.user_logged);
        await router.push({ name: 'companies-map' });
    }

    const makeLoginRequest = async (data)  => {
        httpClient.interceptors.request.clear();

        return await httpClient.post('/auth/login', data)
            .then(({ data } : AxiosResponse) => {
                return data;
            })
            .catch((error : AxiosError) => {
                return error
            });
    }

    return { authData, isAuth, setIsAuth, checkToken, login, clear }
})