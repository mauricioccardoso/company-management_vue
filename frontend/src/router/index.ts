import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from "@/views/AuthView.vue";
import LoginForm from "@/components/AuthView/LoginForm.vue";
import { useAuthDataStore } from "@/stores/AuthDataStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
      meta: { requiresAuth: true },
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
})

router.beforeEach( async (to , from, next) : Promise<void> => {
  const authDataStore = useAuthDataStore();

  if(authDataStore.authData.access_token && !authDataStore.isAuth) {
    await authDataStore.checkToken();
  }

  if(to.meta.requiresAuth && !authDataStore.isAuth) {
    next({ name: "auth" });
  } else if(to.meta.isGuest && authDataStore.isAuth) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router
