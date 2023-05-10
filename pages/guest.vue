
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected'
  }
})
const route = useRoute()
const { $client } = useNuxtApp()

const { data: hello } = await $client.hello.hello.useQuery()
</script>
<template>
  <div>
    Hey I'm only for guests
    <p>{{ hello?.greeting }}</p>
    <pre>
      {{ getAll }}
    </pre>
  </div>
</template>
