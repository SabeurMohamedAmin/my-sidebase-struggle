
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected'
  }
})
const { $client } = useNuxtApp()
const { data: hello } = await $client.hello.useQuery({ text: 'client' })
</script>
<template>
  <div>
    Hey I'm only for guests
    <p>{{ hello?.greeting }}</p>
  </div>
</template>
