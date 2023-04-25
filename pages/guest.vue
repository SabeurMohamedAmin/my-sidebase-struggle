<template>
  <div>
    Hey I'm only for guests
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected'
  }
})

</script>
