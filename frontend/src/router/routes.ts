import type { RouteRecordRaw } from "vue-router";
import MainView from "@/views/MainView.vue";
import AuthView from "@/views/AuthView.vue";
import LoginForm from "@/components/AuthView/LoginForm.vue";

export const routes : ReadonlyArray<RouteRecordRaw> = [
    {
        path: '/',
        redirect: 'home',
        meta: { requiresAuth: true },
        children: [
            {
                path: '/home',
                name: 'home',
                component: MainView
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