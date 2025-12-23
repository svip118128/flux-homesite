<template>
  <section class="container section">
    <h1>{{ $t("page.title.help") }}</h1>
    <div class="help-list">
      <div class="help-item"><router-link to="/help/create-team">{{ $t("help.item1") }}</router-link></div>
      <div class="help-item"><router-link to="/help/enable-2fa">{{ $t("help.item2") }}</router-link></div>
      <div class="help-item"><router-link to="/help/import-users">{{ $t("help.item3") }}</router-link></div>
    </div>
  </section>
</template>
