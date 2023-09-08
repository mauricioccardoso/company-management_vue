<template>
  <div class="min-h-screen flex flex-col justify-between h-full w-64 bg-app-bg-primary text-white p-9">
    <div>
      <ConvictiLogo class="w-full" />

      <div class="h-full text-sm font-medium mt-16">
        <label>MENU</label>

        <SideBarButton :path="{ name: 'login' }">
          <CompanyIcon class="mr-4" />
          Empresas
        </SideBarButton>

        <!-- Other Buttons -->

      </div>
    </div>

    <div class="mt-6">
      <!-- Logout Button -->
      <SideBarButton
          :cbFunction="authDataStore.clear"
          :path="{name: 'login' }"
          customClasses="bg-transparent text-white hover:text-red-500 hover:outline hover:outline-red-500 hover:outline-2 hover:outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-red-500 focus-visible:outline-red-500">
        <LogoutIcon class="mr-4"/>
        Sair
      </SideBarButton>
    </div>
  </div>
</template>

<script setup>
import CompanyIcon from "@/components/Icons/CompanyIcon.vue";
import LogoutIcon from "@/components/Icons/LogoutIcon.vue";
import SideBarButton from "@/components/MainView/SideBarButton.vue";
import {useAuthDataStore} from "@/stores/AuthDataStore";
import ConvictiLogo from "@/components/img/ConvictiLogo.vue";

const authDataStore = useAuthDataStore();
</script>