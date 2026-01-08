<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useOSDetection } from '~/composables';
const { osInfo } = useOSDetection();
const selectedPlatform = ref<string>("windows");

const platformName = computed(() => {
  if(osInfo.value.platform === 'windows') {
    return 'Windows';
  } else if(osInfo.value.platform === 'mac') {
    return 'macOS';
  } else if(osInfo.value.platform === 'ios') {
    return 'iOS';
  } else if(osInfo.value.platform === 'android') {
    return 'Android';
  }
  return 'Unknown';
})

watch(() => osInfo.value.platform, (newPlatform) => {
  if(newPlatform && !osInfo.value.isDetecting) {
    selectedPlatform.value = newPlatform;
  }
},{immediate: true})

const handleDownload = (e: Event, type?: string) => {
  e.preventDefault();

  if (type === 'desktop') {
    const platform = osInfo.value.platform;
    const arch = osInfo.value.architecture;
    
    if (platform === 'windows') {
      let windowsArch = 'x64'; // default
      if (arch === 'win64' || arch === 'x64' || arch === 'amd64') {
        windowsArch = 'x64';
      } else if (arch === 'win32' || arch === 'x86') {
        windowsArch = 'x86';
      } else if (arch === 'arm64') {
        windowsArch = 'arm64';
      }
      const downloadUrl = `/api/download/windows/${windowsArch}`;
      window.location.href = downloadUrl;
    } else if (platform === 'mac') {
      let macArch = 'silicon'; // default
      if (arch === 'silicon' || arch === 'arm64' || arch === 'arm') {
        macArch = 'silicon';
      } else if (arch === 'intel' || arch === 'x64' || arch === 'amd64') {
        macArch = 'intel';
      }
      const downloadUrl = `/api/download/mac/${macArch}`;
      window.location.href = downloadUrl;
    } else {
      const downloadUrl = '/api/download/windows/x64';
      window.location.href = downloadUrl;
    }
    return;
  }
  
  if (type === 'ios') {
    const iosUrl = 'https://apps.apple.com/app/yourapp';
    window.open(iosUrl, '_blank');
    return;
  }
  
  if (type === 'android') {
    const downloadUrl = '/api/download/android';
    window.location.href = downloadUrl;
    return;
  }
  
  const downloadInfo = (e.target as HTMLElement).closest('a')?.dataset;
  if (downloadInfo && (downloadInfo as any).url) {
    const url = (downloadInfo as any).url;
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  }
}

useHead({
  title: $t("download.title"),
  meta: [
    { name: 'description', content: $t("download.description") },
  ],
})

</script>

<template>
  <section class="container section">
    <h1>{{ $t("download.title") }}</h1>
    <p class="lead">{{ $t("download.lead") }}</p>
    
    <div v-if="!osInfo.isDetecting && osInfo.platform" id="dl-platform" class="notice" style="margin-bottom:14px">
      <span>{{ $t("detected.os") }}</span> <span id="detected-cta">{{ platformName  }}</span>
      <span v-if="osInfo.architecture">({{ osInfo.architecture }})</span>
    </div>

    <div class="grid-3">
      <a class="card feature" href="#" @click="(e) => handleDownload(e, 'ios')">
        <div class="icon"><img src="/assets/icons/download.svg" alt=""></div>
        <div>
          <h3>{{ $t("download.card.ios") }}</h3>
          <p>TestFlight</p>
        </div>
      </a>
      <a class="card feature" href="#" @click="(e) => handleDownload(e, 'android')">
        <div class="icon"><img src="/assets/icons/download.svg" alt=""></div>
        <div>
          <h3>{{ $t("download.card.android") }}</h3>
          <p>arm64-v8a</p>
        </div>
      </a>
      <a class="card feature" href="#" @click="(e) => handleDownload(e, 'desktop')">
        <div class="icon"><img src="/assets/icons/download.svg" alt=""></div>
        <div>
          <h3>{{ $t("download.card.desktop") }}</h3>
          <p v-if="osInfo.platform === 'windows'">
            Windows 
            <span v-if="osInfo.architecture === 'arm64'">ARM64</span>
            <span v-else-if="osInfo.architecture === 'win64'">64-bit (AMD64/Intel64)</span>
            <span v-else>32-bit</span>
          </p>
          <p v-else-if="osInfo.platform === 'mac'">
            macOS {{ osInfo.architecture === 'silicon' ? '(Apple Silicon/ARM64)' : '(Intel/x64)' }}
          </p>
          <p v-else>Windows / macOS</p>
        </div>
      </a>
    </div>
    <p class="small">{{ $t("download.note") }}</p>
  </section>
</template>
