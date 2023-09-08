import type { RouteRecordRaw } from "vue-router";
import MainView from "@/views/MainView.vue";
import AuthView from "@/views/AuthView.vue";
import LoginForm from "@/components/AuthView/LoginForm.vue";
import CompaniesMapView from "@/views/MainView/CompaniesMapView.vue";

export const routes : ReadonlyArray<RouteRecordRaw> = [
    {
        path: '/',
        redirect: 'companies-map',
        component: MainView,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/companies-map',
                name: 'companies-map',
                component: CompaniesMapView
            }
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        redirect: '/login',
        component: AuthView,
        meta: { isGuest: true },
        children: [
            {
                path: '/login',
                name: 'login',
                component: LoginForm
            }
        ]
    }
]