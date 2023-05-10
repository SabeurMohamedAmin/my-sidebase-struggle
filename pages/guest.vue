
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

const { data: hello } = await $client.hello.hello.useQuery({
  text: 'finally this is the hello subroute from trpc'
})

const { data: getAll } = $client.posts.getAll.useQuery()
console.log(getAll.value)
</script>
<template>
  <div>
    Hey I'm only for guests
    <p>{{ hello?.greeting }}</p>

    <div v-for="post in getAll" class="">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>
