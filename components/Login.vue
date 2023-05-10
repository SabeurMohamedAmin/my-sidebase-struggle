<script setup lang="ts">
const { data: providers } = await useFetch('/api/auth/providers')
</script>
<template>
  <section>
    <div
      class="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"
          >
            Welcome back
          </h1>
          <div class="flex justify-center ">
            <ProviderLogin provider-name="Github" />
          </div>

          <!--   <div class="flex justify-between">
            <ProviderLogin v-for="(provider, index) in providers" :key="index" class="" :provider-name="provider.name" />
          </div>

          <div class="flex items-center">
            <div class="bg-gray-500 h-[.125rem] w-full" />
            <p class="mx-8 text-gray-500 text-medium">
              or
            </p>
            <div class="bg-gray-500 h-[.125rem] w-full" />
          </div>

          <LoginForm />-->
        </div>
      </div>
    </div>
  </section>
</template>
