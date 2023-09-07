import axios, { type InternalAxiosRequestConfig } from "axios";

import type { AxiosInstance } from "axios";
import { useAuthDataStore } from "@/stores/AuthDataStore";

export const baseURL : string = "http://localhost:8080/api/";

const httpClient : AxiosInstance = axios.create({
    baseURL,
});

httpClient.interceptors.request.use((config : InternalAxiosRequestConfig) => {
    const authDataStore = useAuthDataStore();
    const token : string = authDataStore.authData.access_token

    config.headers.Authorization = `Bearer ${ token }`;
    return config;
});

export default httpClient;