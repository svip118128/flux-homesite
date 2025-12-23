<template>
  <section class="container section">
    <h1>{{ $t("page.title.help") }}</h1>
    <div class="help-list">
      <div class="help-item"><NuxtLink to="/help/create-team">{{ $t("help.item1") }}</NuxtLink></div>
      <div class="help-item"><NuxtLink to="/help/enable-2fa">{{ $t("help.item2") }}</NuxtLink></div>
      <div class="help-item"><NuxtLink to="/help/import-users">{{ $t("help.item3") }}</NuxtLink></div>
    </div>
  </section>
</template>
