<script setup lang="ts">
definePageMeta({
  middleware: 'auth',

  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected'
  }
})
</script>

<template>
  <Login />
</template>
