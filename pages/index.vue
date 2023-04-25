<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Welcome home.
    </h1>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: '/protected'
  }
})
const { data } = await useFetch('/api/me')

</script>
