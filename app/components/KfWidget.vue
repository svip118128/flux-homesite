<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  telegram: { type: String, default: '' },
  email: { type: String, default: 'service@jdchat.im' },
  docsUrl: { type: String, default: '/help' },
  faqUrl: { type: String, default: '/faq' },
  wsUrl: { type: String, default: '' },
  uploadUrl: { type: String, default: '/upload' },
  primary: { type: String, default: '#64a8ff' },
  primary2: { type: String, default: '#7a5bff' }
});

const { t, locale } = useI18n();
const isOpen = ref(false);
const messages = reactive([]);
const inputVal = ref('');
const fileInput = ref(null);
const msgBody = ref(null);
const isDragActive = ref(false);
let ws = null;
let reconnectTimer = null;
let convId = '';

const initConvId = () => {
  let cid = localStorage.getItem('jdchat_conv_id');
  if (!cid) {
    cid = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
    localStorage.setItem('jdchat_conv_id', cid);
  }
  convId = cid;
};

const toggle = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    sessionStorage.setItem('jdchat_kf_open', '1');
    nextTick(() => scrollBottom());
  } else {
    sessionStorage.removeItem('jdchat_kf_open');
  }
};

const close = () => {
  isOpen.value = false;
  sessionStorage.removeItem('jdchat_kf_open');
};

const scrollBottom = () => {
  if (msgBody.value) {
    msgBody.value.scrollTop = msgBody.value.scrollHeight;
  }
};

const pushMsg = (role, text, translationKey = null) => {
  messages.push({ type: 'msg', role, text, translationKey });
  nextTick(scrollBottom);
};

const pushImage = (role, url, caption) => {
  messages.push({ type: 'image', role, url, caption });
  nextTick(scrollBottom);
};

const pushFile = (role, url, name, size) => {
  messages.push({ type: 'file', role, url, name, size });
  nextTick(scrollBottom);
};

const connectWS = () => {
  if (!props.wsUrl) return;
  let url = props.wsUrl;
  const qp = 'conv_id=' + encodeURIComponent(convId) + '&lang=' + encodeURIComponent(locale.value);
  url += (url.indexOf('?') >= 0 ? '&' : '?') + qp;

  try {
    ws = new WebSocket(url);
    ws.onmessage = (ev) => {
      let d; try { d = JSON.parse(ev.data); } catch (e) { return; }
      if (d.type === 'msg') { pushMsg(d.from || 'agent', d.text || ''); }
      else if (d.type === 'system') { pushMsg('system', d.text || ''); }
      else if (d.type === 'image') { pushImage('agent', d.url, d.caption); }
      else if (d.type === 'file') { pushFile('agent', d.url, d.filename, d.size); }
    };
    ws.onclose = () => {
      if (!reconnectTimer) {
        reconnectTimer = setTimeout(() => { reconnectTimer = null; connectWS(); }, 1500);
      }
    };
    ws.onerror = () => { try { ws.close(); } catch (e) { } };
  } catch (e) { }
};

const sendMsg = () => {
  const text = inputVal.value.trim();
  if (!text) return;
  inputVal.value = '';
  pushMsg('user', text);
  if (ws && ws.readyState === 1) {
    ws.send(JSON.stringify({ type: 'msg', text }));
  }
};

const handleKeydown = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMsg();
  }
};

const triggerUpload = () => {
  fileInput.value.click();
};

const handleFileSelect = (e) => {
  const file = e.target.files[0];
  if (file) doUpload(file);
  e.target.value = '';
};

const doUpload = (file) => {
  const isImg = /^image\//.test(file.type);
  if (isImg) {
    try {
      const url = URL.createObjectURL(file);
      pushImage('user', url, '');
    } catch (e) { }
  } else {
    pushFile('user', '#', file.name, file.size);
  }

  const fd = new FormData();
  fd.append('conv_id', convId);
  fd.append('caption', '');
  fd.append('file', file, file.name);

  fetch(props.uploadUrl, { method: 'POST', body: fd, credentials: 'omit' })
    .then(r => { if (!r.ok) throw new Error('upload failed'); return r.json(); })
    .then(() => { /* ok */ })
    .catch(() => { pushMsg('system', '❗ Upload failed, please retry'); });
};

// Drag and drop
let dragDepth = 0;
const onDragEnter = (e) => { e.preventDefault(); dragDepth++; isDragActive.value = true; };
const onDragLeave = (e) => { e.preventDefault(); dragDepth = Math.max(0, dragDepth - 1); if (dragDepth === 0) isDragActive.value = false; };
const onDragOver = (e) => { e.preventDefault(); };
const onDrop = (e) => {
  e.preventDefault();
  isDragActive.value = false;
  dragDepth = 0;
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    doUpload(e.dataTransfer.files[0]);
  }
};

const prettySize = (n) => {
  n = Number(n) || 0;
  if (n < 1024) return n + 'B';
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + 'KB';
  if (n < 1024 * 1024 * 1024) return (n / 1024 / 1024).toFixed(1) + 'MB';
  return (n / 1024 / 1024 / 1024).toFixed(1) + 'GB';
};

const tgLink = () => {
  if (!props.telegram) return '#';
  let h = props.telegram.trim();
  if (h.startsWith('http')) return h;
  if (h.startsWith('@')) h = h.slice(1);
  let payload = '';
  try { payload = btoa(unescape(encodeURIComponent(convId || ''))); } catch (e) { }
  return 'https://t.me/' + h + (payload ? ('?start=' + payload) : '');
};

onMounted(() => {
  initConvId();
  if (sessionStorage.getItem('jdchat_kf_open') === '1') {
    isOpen.value = true;
  }
  pushMsg('system', '', 'kf.intro');
  connectWS();
});

onUnmounted(() => {
  if (ws) ws.close();
  if (reconnectTimer) clearTimeout(reconnectTimer);
});
</script>

<template>
  <div id="jd-kf-widget" :class="{ 'drag-active': isDragActive }"
       @dragenter="onDragEnter" @dragleave="onDragLeave" @dragover="onDragOver" @drop="onDrop"
       :style="{ '--jd-primary': primary, '--jd-primary-2': primary2 }">
    
    <button class="jd-toggle" aria-label="Open support" :aria-expanded="isOpen" @click="toggle">?</button>
    
    <div class="jd-window" v-show="isOpen">
      <div class="jd-head">
        <div>
          <div class="jd-title">{{ $t('kf.title') }}</div>
          <div class="jd-lead">{{ $t('kf.lead') }}</div>
        </div>
        <button class="jd-close" aria-label="Close" @click="close">×</button>
      </div>
      
      <div class="jd-body" ref="msgBody">
        <div v-for="(m, i) in messages" :key="i" :class="['jd-msg', m.role]">
          <template v-if="m.type === 'msg' || m.type === 'system'">
             {{ m.translationKey ? $t(m.translationKey) : m.text }}
          </template>
          
          <template v-else-if="m.type === 'image'">
            <img class="jd-img" :src="m.url" :alt="m.caption || ''" loading="lazy" 
                 @error="m.error = true" v-if="!m.error" />
            <a v-else class="jd-file" :href="m.url" target="_blank" rel="noopener">
              {{ (m.caption || 'Image') }} ⤓ {{ $t('kf.download') }}
            </a>
            <div v-if="m.caption" class="jd-cap">{{ m.caption }}</div>
          </template>

          <template v-else-if="m.type === 'file'">
            <a class="jd-file" :href="m.url" target="_blank" rel="noopener">
              {{ (m.name || 'file') + (m.size ? ' · ' + prettySize(m.size) : '') }} ｜ {{ $t('kf.preview') }}
            </a>
            <a class="jd-file" style="margin-left:8px" :href="m.url + '&dl=1'" target="_blank" rel="noopener">
              {{ $t('kf.download') }}
            </a>
          </template>
        </div>
      </div>
      
      <div class="jd-actions">
        <a v-if="telegram" class="jd-btn-link" :href="tgLink()" target="_blank" rel="noopener">{{ $t('kf.tg') }}</a>
        <a class="jd-btn-link" :href="'mailto:' + email">{{ $t('kf.email') }}</a>
        <NuxtLink class="jd-btn-link" :to="docsUrl">{{ $t('kf.docs') }}</NuxtLink>
        <NuxtLink class="jd-btn-link" :to="faqUrl">{{ $t('kf.faq') }}</NuxtLink>
      </div>
      
      <div class="jd-foot">
        <input type="text" v-model="inputVal" :placeholder="$t('kf.placeholder')" @keydown="handleKeydown" />
        <button class="jd-upload" :title="$t('kf.upload')" @click="triggerUpload">📎</button>
        <input type="file" ref="fileInput" accept="image/*,application/pdf,application/zip,application/msword,application/vnd.openxmlformats-officedocument.*" hidden @change="handleFileSelect" />
        <button class="jd-btn" @click="sendMsg">{{ $t('kf.send') }}</button>
      </div>

      <div class="jd-dropzone" v-show="isDragActive" @click="isDragActive = false">
        {{ $t('kf.drop') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
:root { --jd-primary: #64a8ff; --jd-primary-2: #7a5bff; --jd-text: #e8f0ff; --jd-muted: #9bb0d9; }
#jd-kf-widget { position: fixed; right: 18px; bottom: 18px; z-index: 9999; font: 14px/1.5 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu; color: var(--jd-text); }
#jd-kf-widget * { box-sizing: border-box; }
.jd-toggle { width: 52px; height: 52px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, .18); background: linear-gradient(135deg, var(--jd-primary), var(--jd-primary-2)); color: #0b132b; display: grid; place-items: center; font-weight: 800; box-shadow: 0 10px 30px rgba(0, 0, 0, .35); cursor: pointer; }
.jd-window { position: absolute; right: 0; bottom: 64px; width: min(360px, 92vw); border: 1px solid rgba(255, 255, 255, .12); background: linear-gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02)); border-radius: 16px; box-shadow: 0 16px 40px rgba(0, 0, 0, .45); overflow: hidden; backdrop-filter: blur(8px); }
.jd-head { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid rgba(255, 255, 255, .08); }
.jd-title { font-weight: 800; }
.jd-lead { color: var(--jd-muted); font-size: 12px; }
.jd-close { background: none; border: 0; color: #cfe2ff; font-size: 18px; cursor: pointer; }
.jd-body { max-height: 46vh; overflow: auto; padding: 12px; display: grid; gap: 8px; }
.jd-msg { padding: 10px 12px; border: 1px solid rgba(255, 255, 255, .12); border-radius: 12px; max-width: 86%; }
.jd-msg.bot, .jd-msg.system { background: rgba(255, 255, 255, .04); }
.jd-msg.user { background: linear-gradient(135deg, rgba(100, 168, 255, .35), rgba(122, 91, 255, .35)); margin-left: auto; }
.jd-actions { display: flex; gap: 8px; padding: 10px; border-top: 1px solid rgba(255, 255, 255, .08); }
.jd-btn-link { flex: 1; text-align: center; text-decoration: none; border: 1px solid rgba(255, 255, 255, .18); border-radius: 10px; padding: 8px 10px; color: var(--jd-text); background: rgba(255, 255, 255, .03); font-size: 12px; }
.jd-foot { display: flex; gap: 8px; align-items: center; padding: 10px; border-top: 1px solid rgba(255, 255, 255, .08); }
.jd-foot input { flex: 1; background: #0e1835; color: #dfe7ff; border: 1px solid rgba(255, 255, 255, .12); border-radius: 10px; padding: 8px 10px; }
.jd-btn { padding: 8px 10px; border-radius: 10px; border: 1px solid transparent; background: linear-gradient(135deg, var(--jd-primary), var(--jd-primary-2)); color: #0b132b; cursor: pointer; font-weight: 600; }
.jd-upload { padding: 8px 10px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, .18); background: rgba(255, 255, 255, .06); color: var(--jd-text); cursor: pointer; }
.jd-img { max-width: 100%; max-height: 320px; width: auto; height: auto; object-fit: contain; display: block; border-radius: 10px; border: 1px solid rgba(255, 255, 255, .12); }
.jd-cap { font-size: 12px; color: var(--jd-muted); margin-top: 6px; }
.jd-file { text-decoration: none; color: var(--jd-text); word-break: break-all; }
.jd-dropzone { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(0, 0, 0, .35); border: 2px dashed rgba(255, 255, 255, .28); color: #dfe7ff; font-weight: 600; font-size: 14px; cursor: pointer; z-index: 5; }
</style>
