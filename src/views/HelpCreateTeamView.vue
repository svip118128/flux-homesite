<template>
  <section class="container section">
    <h1>{{ $t("helpDetail.team.title") }}</h1>
    <article class="card" style="padding:16px">
      <p>{{ $t("helpDetail.team.intro") }}</p>
      <h3>{{ $t("helpDetail.steps") }}</h3>
      <ol>
        <li>{{ $t("helpDetail.step1") }}</li>
        <li>{{ $t("helpDetail.step2") }}</li>
        <li>{{ $t("helpDetail.step3") }}</li>
      </ol>
      <pre class="code">{{ $t("helpDetail.tip") }}</pre>
    </article>
    <p><router-link to="/help">{{ $t("helpDetail.back") }}</router-link></p>
  </section>
</template>
