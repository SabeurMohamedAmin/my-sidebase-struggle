<script setup lang="ts">
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

</script>

<template>
  <div class="w-screen h-screen bg-gray-50 dark:bg-gray-900">
    <Navbar />
    <NuxtPage class="max-w-screen-xl p-4 mx-auto" />
  </div>
</template>
