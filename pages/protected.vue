<script setup lang="ts">
const { data } = useAuth()
</script>
<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Hi! I'm protected.
    </h1>
    <pre> {{ data }} </pre>
    <h2 v-if="data?.subscribed">
      Thank you for subscripbing!
    </h2>
  </div>
</template>
