<template>
  <section class="container section">
    <h1>{{ $t("page.title.faq") }}</h1>
    
    <div id="inline-faq">
      <details>
        <summary>{{ $t("faq.q1") }}</summary>
        <p>{{ $t("faq.a1") }}</p>
      </details>
      <details>
        <summary>{{ $t("faq.q2") }}</summary>
        <p>{{ $t("faq.a2") }}</p>
      </details>
      <details>
        <summary>{{ $t("faqinline.q1") }}</summary>
        <p>{{ $t("faqinline.a1") }}</p>
      </details>
      <details>
        <summary>{{ $t("faqinline.q2") }}</summary>
        <p>{{ $t("faqinline.a2") }}</p>
      </details>
      <details>
        <summary>{{ $t("faqinline.q3") }}</summary>
        <p>{{ $t("faqinline.a3") }}</p>
      </details>
    </div>
  </section>
</template>
