<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useOSDetection } from '~/composables';
import { downloadUrls, androidDownloadUrl, iosDownloadUrl } from '~/config/downloads';

const { t } = useI18n();
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

// Map detected architecture to config keys
const getWindowsArch = (arch: string | null): string => {
  if (arch === 'arm64') return 'arm64';
  if (arch === 'win32') return 'win32';
  return 'win64'; // default
}

const getMacArch = (arch: string | null): string => {
  if (arch === 'intel') return 'intel';
  return 'silicon'; // default for Apple Silicon
}

const handleDownload = (e: Event, type?: string) => {
  e.preventDefault();

  if (type === 'desktop') {
    const platform = osInfo.value.platform;
    const arch = osInfo.value.architecture;
    
    if (platform === 'windows') {
      const windowsArch = getWindowsArch(arch);
      const config = downloadUrls.windows?.[windowsArch];
      if (config?.url) {
        window.location.href = config.url;
      }
    } else if (platform === 'mac') {
      const macArch = getMacArch(arch);
      const config = downloadUrls.mac?.[macArch];
      if (config?.url) {
        window.location.href = config.url;
      }
    } else {
      // Default to Windows x64
      const config = downloadUrls.windows?.win64;
      if (config?.url) {
        window.location.href = config.url;
      }
    }
    return;
  }
  
  if (type === 'ios') {
    // if (iosDownloadUrl?.url) {
    //   window.open(iosDownloadUrl.url, '_blank');
    // }
    alert(t('download.comingSoon'));
    return;
  }
  
  if (type === 'android') {
    // if (androidDownloadUrl?.url) {
    //   window.location.href = androidDownloadUrl.url;
    // }
    // window.open(androidDownloadUrl.url, '_blank');
    alert(t('download.comingSoon'));
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
