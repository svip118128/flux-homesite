<template>
  <section class="container section">
    <h1>{{ $t("page.title.sitemap") }}</h1>
    <div class="card" style="padding:24px">
      <div class="sitemap-section">
        <h3>{{ $t("sitemap.main") }}</h3>
        <div class="sitemap-grid">
          <div><NuxtLink to="/">{{ $t("nav.home") }}</NuxtLink></div>
          <div><NuxtLink to="/features">{{ $t("nav.features") }}</NuxtLink></div>
          <div><NuxtLink to="/functions">{{ $t("nav.functions") }}</NuxtLink></div>
          <div><NuxtLink to="/solutions">{{ $t("nav.solutions") }}</NuxtLink></div>
          <div><NuxtLink to="/transfer">{{ $t("nav.transfer") }}</NuxtLink></div>
          <div><NuxtLink to="/download">{{ $t("nav.download") }}</NuxtLink></div>
          <div><NuxtLink to="/contact">{{ $t("page.title.contact") }}</NuxtLink></div>
        </div>
      </div>

      <div class="sitemap-section">
        <h3>{{ $t("sitemap.news") }}</h3>
        <div class="sitemap-grid">
          <div><NuxtLink to="/news">{{ $t("nav.news") }}</NuxtLink></div>
          <div><NuxtLink to="/news/v1-launch">{{ $t("newsDetail.v1.title") }}</NuxtLink></div>
          <div><NuxtLink to="/news/ai-assistant">{{ $t("newsDetail.ai.title") }}</NuxtLink></div>
        </div>
      </div>

      <div class="sitemap-section">
        <h3>{{ $t("sitemap.help") }}</h3>
        <div class="sitemap-grid">
          <div><NuxtLink to="/help">{{ $t("nav.help") }}</NuxtLink></div>
          <div><NuxtLink to="/faq">{{ $t("nav.faq") }}</NuxtLink></div>
          <div><NuxtLink to="/help/create-team">{{ $t("helpDetail.team.title") }}</NuxtLink></div>
          <div><NuxtLink to="/help/enable-2fa">{{ $t("helpDetail.2fa.title") }}</NuxtLink></div>
          <div><NuxtLink to="/help/import-users">{{ $t("helpDetail.import.title") }}</NuxtLink></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.sitemap-grid a {
  color: #fff;
  opacity: 0.85;
}

.sitemap-grid a:hover {
  opacity: 1;
  color: #60a5fa;
}

.sitemap-section h3 {
  color: #60a5fa;
  margin-top: 24px;
  margin-bottom: 12px;
}

.sitemap-section:first-child h3 {
  margin-top: 0;
}
</style>
