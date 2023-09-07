<template>
  <form class="text-white">
    <div>
      <label for="email" class="block text-sm font-medium leading-6">E-mail</label>
      <div class="mt-1">
        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div class="mt-3">
      <label for="password" class="block text-sm font-medium leading-6">Senha</label>
      <div class="mt-1">
        <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div class="mt-6">
      <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-app-label-secondary px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Entrar
      </button>
    </div>
  </form>
</template>