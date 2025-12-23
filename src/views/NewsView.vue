<template>
  <section class="container section">
    <h1>{{ $t("page.title.news") }}</h1>
    <div class="news-list">
      <article class="news-item">
        <h3><router-link to="/news/v1-launch">{{ $t("news.item1.title") }}</router-link></h3>
        <p class="small">{{ $t("news.item1.date") }} • Jdchat Team</p>
        <p class="small">{{ $t("news.item1.desc") }}</p>
      </article>
      <article class="news-item">
        <h3><router-link to="/news/ai-assistant">{{ $t("news.item2.title") }}</router-link></h3>
        <p class="small">{{ $t("news.item2.date") }} • Jdchat Team</p>
        <p class="small">{{ $t("news.item2.desc") }}</p>
      </article>
    </div>
  </section>
</template>
