
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: false,
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
    <h1>Hey this is your home</h1>

    <p>{{ hello?.greeting }}</p>

    <div v-if="getAll?.map((post) => post.id) " class="">
      <div v-for="post in getAll" class="">
        <p>{{ post.content }}</p>
      </div>
    </div>
    <div v-else class="">
      <p>no posts</p>
    </div>
  </div>
</template>
