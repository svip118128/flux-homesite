<template>
  <section class="container section">
    <h1>{{ $t("page.title.sitemap") }}</h1>
    <div class="card" style="padding:24px">
      <div class="sitemap-section">
        <h3>{{ $t("sitemap.main") }}</h3>
        <div class="sitemap-grid">
          <div><router-link to="/">{{ $t("nav.home") }}</router-link></div>
          <div><router-link to="/features">{{ $t("nav.features") }}</router-link></div>
          <div><router-link to="/functions">{{ $t("nav.functions") }}</router-link></div>
          <div><router-link to="/solutions">{{ $t("nav.solutions") }}</router-link></div>
          <div><router-link to="/transfer">{{ $t("nav.transfer") }}</router-link></div>
          <div><router-link to="/download">{{ $t("nav.download") }}</router-link></div>
          <div><router-link to="/contact">{{ $t("page.title.contact") }}</router-link></div>
        </div>
      </div>

      <div class="sitemap-section">
        <h3>{{ $t("sitemap.news") }}</h3>
        <div class="sitemap-grid">
          <div><router-link to="/news">{{ $t("nav.news") }}</router-link></div>
          <div><router-link to="/news/v1-launch">{{ $t("newsDetail.v1.title") }}</router-link></div>
          <div><router-link to="/news/ai-assistant">{{ $t("newsDetail.ai.title") }}</router-link></div>
        </div>
      </div>

      <div class="sitemap-section">
        <h3>{{ $t("sitemap.help") }}</h3>
        <div class="sitemap-grid">
          <div><router-link to="/help">{{ $t("nav.help") }}</router-link></div>
          <div><router-link to="/faq">{{ $t("nav.faq") }}</router-link></div>
          <div><router-link to="/help/create-team">{{ $t("helpDetail.team.title") }}</router-link></div>
          <div><router-link to="/help/enable-2fa">{{ $t("helpDetail.2fa.title") }}</router-link></div>
          <div><router-link to="/help/import-users">{{ $t("helpDetail.import.title") }}</router-link></div>
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
