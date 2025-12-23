<template>
  <section class="container section">
    <h1>{{ $t("newsDetail.v1.title") }}</h1>
    <div class="small" style="margin-bottom:16px">{{ $t("newsDetail.v1.date") }}</div>
    <article class="card" style="padding:16px">
      <p>{{ $t("newsDetail.v1.content") }}</p>
    </article>
    <p style="margin-top:16px"><NuxtLink to="/news">{{ $t("newsDetail.back") }}</NuxtLink></p>
  </section>
</template>
