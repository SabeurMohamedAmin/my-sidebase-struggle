<template>
  <h1 class="text-3xl font-bold">
    Welcome home.
  </h1>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig.GITHUB_CLIENT_SECRET, runtimeConfig.public.GITHUB_CLIENT_ID)
</script>
