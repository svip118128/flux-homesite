<script setup lang="ts">
import { openDeepLink } from '~/utils/deeplink'

onMounted(() => {
  const currentUrl = window.location.href
  if (currentUrl.includes('/link')) {
    openDeepLink(currentUrl)
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
