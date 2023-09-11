<template>
  <section
      :class="{'ml-[-300px]': !sidebarControllerStore.isSidebarOpen}"
      class="absolute z-20 sm:ml-0 sm:static sm:z-0
             transition transition-all duration-300
             flex flex-col justify-between h-full min-h-screen w-64 bg-app-bg-primary text-white p-9">
    <div>
      <ConvictiLogo class="w-full" />

      <div class="h-full text-sm font-medium mt-16">
        <label>MENU</label>

        <SideBarButton :path="{ name: 'companies-map' }">
          <CompanyIcon class="text-lg mr-4" />
          Empresas
        </SideBarButton>

        <!-- Other Buttons -->

      </div>
    </div>

    <div class="mt-6">
      <!-- Logout Button -->
      <SideBarButton
          @click="sidebarControllerStore.setIsSidebarOpen(false)"
          :cbFunction="authDataStore.clear"
          :path="{name: 'login' }"
          customClasses="bg-transparent text-white hover:text-red-500 hover:outline hover:outline-red-500 hover:outline-2 hover:outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-red-500 focus-visible:outline-red-500">
        <LogoutIcon class="mr-4"/>
        Sair
      </SideBarButton>
    </div>
  </section>
  <div
      @click="sidebarControllerStore.setIsSidebarOpen(false)"
      :class="{'hidden': !sidebarControllerStore.isSidebarOpen}"
      class="sm:hidden absolute top-0 right-0 z-10 w-full h-screen bg-black opacity-50"></div>
</template>

<script setup>
import CompanyIcon from "@/components/Icons/CompanyIcon.vue";
import LogoutIcon from "@/components/Icons/LogoutIcon.vue";
import SideBarButton from "@/components/MainView/SideBarButton.vue";
import ConvictiLogo from "@/components/img/ConvictiLogo.vue";
import {useAuthDataStore} from "@/stores/AuthDataStore";
import { useSidebarControllerStore } from "@/stores/SidebarControllerStore";

const authDataStore = useAuthDataStore();

const sidebarControllerStore =useSidebarControllerStore();

</script>