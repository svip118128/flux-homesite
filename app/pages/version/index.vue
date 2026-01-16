<template>
  <div :style="containerStyle">{{ VERSION }}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { VERSION } from '@/config'

const containerStyle = {
  margin: 0,
  padding: 0,
  fontFamily: 'monospace'
}

onMounted(() => {
  document.body.style.margin = '0'
  document.body.style.padding = '0'
  document.body.style.fontFamily = 'monospace'
})
</script>

<style scoped>
div {
  margin: 0;
  padding: 0;
}
</style>
