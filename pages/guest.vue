<template>
  <div>
    Hey I'm only for guests
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected'
  }
})
</script>
