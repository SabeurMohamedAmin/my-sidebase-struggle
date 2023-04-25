<script setup lang="ts">
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-900 h-screen w-screen">
    <Navbar />
    <NuxtPage class="max-w-screen-xl mx-auto p-4" />
  </div>
</template>
