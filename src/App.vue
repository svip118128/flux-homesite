<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import KfWidget from './components/KfWidget.vue'
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
  
  <KfWidget 
    telegram="@JDchat_bot" 
    ws-url="wss://test.jdchat.im/ws" 
    email="hello@jdchat.app"
  />
</template>
