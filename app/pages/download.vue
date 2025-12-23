<script setup>
import { ref, onMounted } from 'vue';

const detectedOS = ref('');

const detectOS = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return 'Android';
  if (/iPad|iPhone|iPod/.test(ua)) return 'iOS';
  if (/macintosh|mac os x/i.test(ua)) return 'macOS';
  if (/windows|win32/i.test(ua)) return 'Windows';
  return '';
};

onMounted(() => {
  detectedOS.value = detectOS();
});
</script>

<template>
  <section class="container section">
    <h1>{{ $t("download.title") }}</h1>
    <p class="lead">{{ $t("download.lead") }}</p>
    
    <div v-if="detectedOS" id="dl-platform" class="notice" style="margin-bottom:14px">
      <span>{{ $t("detected.os") }}</span> <span id="detected-cta">{{ detectedOS }}</span>
    </div>

    <div class="grid-3">
      <a class="card feature" id="ios" href="#" onclick="alert('Coming soon'); return false;">
        <div class="icon"><img src="/assets/icons/download.svg" alt=""></div>
        <div>
          <h3>{{ $t("download.card.ios") }}</h3>
          <p>TestFlight</p>
        </div>
      </a>
      <a class="card feature" id="android" href="#" onclick="alert('Coming soon'); return false;">
        <div class="icon"><img src="/assets/icons/download.svg" alt=""></div>
        <div>
          <h3>{{ $t("download.card.android") }}</h3>
          <p>arm64-v8a</p>
        </div>
      </a>
      <a class="card feature" id="desktop" href="#" onclick="alert('Coming soon'); return false;">
        <div class="icon"><img src="/assets/icons/download.svg" alt=""></div>
        <div>
          <h3>{{ $t("download.card.desktop") }}</h3>
          <p>Windows / macOS</p>
        </div>
      </a>
    </div>
    <p class="small">{{ $t("download.note") }}</p>
  </section>
</template>
