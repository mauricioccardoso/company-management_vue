<template>
  <form @submit.prevent="saveCompany" class="flex flex-col justify-between h-full w-full text-app-label-primary p-10 pt-10">

    <div>
      <!-- Title -->
      <span class="text-2xl font-bold">
        Cadastrar Empresa
      </span>

      <!-- Inputs -->
      <div class="grid md:grid-cols-4 gap-x-5 gap-y-1 2xl:gap-y-4 text-sm mt-4">

        <FormInput
            label="Nome"
            @inputValue="(value) => formData.name = value"
            inputName="companyName"
            :inputAttr="{required: true}"
            class="col-span-2"
        />

        <FormInput
            label="Observações"
            @inputValue="(value) => formData.notes = value"
            inputName="companyNotes"
            class="col-span-2"
        />

        <FormInput
            label="CNPJ"
            @inputValue="(value) => formData.cnpj = formatFunctionsStore.getCNPJNumbers(value)"
            inputName="companyCnpj"
            :inputAttr="{required: true}"
            class="col-span-2"
            :cbFunction="formatFunctionsStore.formatCNPJ"
        />

        <FormSelectInput
            label="Categoria"
            :optionsData="formCreateCompanyStore.categories"
            @optionSelected="(value) => formData.category_id = value"
            class="col-span-2"
        />

        <FormInput
            label="E-mail"
            @inputValue="(value) => formData.email = value"
            inputType="email"
            inputName="companyEmail"
            :inputAttr="{required: true}"
            class="col-span-2"
        />

        <div class="hidden md:block row-span-6 col-span-2"></div>

        <FormInput
            label="Whatsapp"
            @inputValue="(value) => formData.whatsapp_phone = formatFunctionsStore.getWhatsNumbers(value)"
            inputName="companyWhatsapp"
            :inputAttr="{required: true}"
            class="col-span-2"
            :cbFunction="formatFunctionsStore.formatWhatsapp"
        />

        <FormInput
            label="Representante"
            @inputValue="(value) => formData.representantive_user = value"
            inputName="companyRepresentantive"
            class="col-span-2"
            :inputAttr="{required: true}"
        />

        <FormInput
            label="Latitude"
            @inputValue="(value) => formData.latitude = parseFloat(value)"
            inputName="companyLatitude"
            :inputAttr="{required: true}"
            :cbFunction="formatFunctionsStore.formatCoordenate"
        />

        <FormInput
            label="Longitude"
            @inputValue="(value) => formData.longitude = parseFloat(value)"
            inputName="companyLongitude"
            :inputAttr="{required: true}"
            :cbFunction="formatFunctionsStore.formatCoordenate"
        />

        <FormSelectInput
            label="Estado"
            @optionSelected="(value) => formData.state_id = value"
            :optionsData="formCreateCompanyStore.states"
        />

        <FormSelectInput
            label="Cidade"
            @optionSelected="(value) => formData.city_id = value"
            noItemsMsg="Selecione um Estado primeiro"
            :optionsData="formCreateCompanyStore.cities"
        />

      </div>
    </div>

    <!-- Buttons -->
    <div class="flex justify-center mt-4">
      <FormButton
          @click="cancelCreate"
          label="Cancelar"
          type="button"
          class="bg-gray-200 text-app-label-primary mr-5"
      />
      <FormButton
          label="Cadastrar Empresa"
          type="submit"
          :isLoading="formCreateCompanyStore.onMakeCreateRequest"
          class="text-white bg-app-label-primary"
          customClasses="hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      />
    </div>

  </form>
</template>

<script setup lang="ts">
import { type Ref, ref, watch } from "vue";
import type { IRequestCreateCompany } from "@/interfaces/IRequestCreateCompany";
import FormSelectInput from "@/components/Form/FormSelectInput.vue";
import FormInput from "@/components/Form/FormInput.vue";
import FormButton from "@/components/Form/FormButton.vue";

import { useFormCreateCompanyStore } from "@/stores/FormCreateCompanyStore";
import { useFormatFunctionsStore } from "@/stores/FormatFunctions";
import { useNotificationStore } from "@/stores/NotificationStore";

const formCreateCompanyStore = useFormCreateCompanyStore();
const formatFunctionsStore = useFormatFunctionsStore();
const notificationStore = useNotificationStore();

formCreateCompanyStore.getStates();
formCreateCompanyStore.getCategories();

const formData : Ref<IRequestCreateCompany> = ref({});

watch(() => formData.value.state_id, () => {
  formCreateCompanyStore.getCities(formData.value.state_id);
});

const cancelCreate = () => {
  formCreateCompanyStore.setIsFormOpen(false)
}

const saveCompany = () => {
  const validate = formCreateCompanyStore.validateCompanyData(formData.value);

  if(validate.length > 0) {
    notificationStore.showNotification(validate, 'error');
    return;
  }

  formCreateCompanyStore.createCompany(formData.value);
}

</script>