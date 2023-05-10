<script setup lang="ts">
const { signIn } = useAuth()
defineProps({
  providerName: String
})
</script>

<template>
  <button
    class="flex items-center px-4 py-2 text-sm font-medium text-gray-500 border border-gray-500 rounded-lg hover:text-black hover:bg-gray-100"
    @click="signIn(providerName?.toLowerCase(), {callbackUrl: '/'})"
  >
    Log in with {{ providerName }}
    <GithubIcon class="ml-2" />
  </button>
</template>
