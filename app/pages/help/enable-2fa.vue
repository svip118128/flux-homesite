<template>
  <section class="container section">
    <h1>{{ $t("helpDetail.2fa.title") }}</h1>
    <article class="card" style="padding:16px">
      <p>{{ $t("helpDetail.2fa.intro") }}</p>
      <h3>{{ $t("helpDetail.steps") }}</h3>
      <ol>
        <li>{{ $t("helpDetail.step1") }}</li>
        <li>{{ $t("helpDetail.step2") }}</li>
        <li>{{ $t("helpDetail.step3") }}</li>
      </ol>
      <pre class="code">{{ $t("helpDetail.tip") }}</pre>
    </article>
    <p><NuxtLink to="/help">{{ $t("helpDetail.back") }}</NuxtLink></p>
  </section>
</template>
