import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from "@/views/AuthView.vue";
import LoginForm from "@/components/AuthView/LoginForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/auth',
      redirect: '/login',
      component: AuthView,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginForm
        }
      ]
    }
  ]
})

export default router
