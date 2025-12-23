<template>
  <div class="section">
    <div class="container">
      <h1>{{ $t("privacy.title") }}</h1>
      <p class="lead">{{ $t("privacy.updateDate") }}: 2025-12-11</p>
      <p class="lead">{{ $t("privacy.effectiveDate") }}: 2025-12-11</p>

      <div class="legal-content card" style="padding: 24px; margin-top: 24px;">
        
        <!-- Introduction -->
        <section>
          <h2>{{ $t("privacy.intro.title") }}</h2>
          <p>{{ $t("privacy.intro.p1") }}</p>
          <p>{{ $t("privacy.intro.p2") }}</p>
          <ul>
            <li>{{ $t("privacy.intro.item1") }}</li>
            <li>{{ $t("privacy.intro.item2") }}</li>
            <li>{{ $t("privacy.intro.item3") }}</li>
            <li>{{ $t("privacy.intro.item4") }}</li>
            <li>{{ $t("privacy.intro.item5") }}</li>
          </ul>
          <p>{{ $t("privacy.intro.p3") }}</p>
        </section>

        <!-- Policy Directory -->
        <section>
          <h2>{{ $t("privacy.toc.title") }}</h2>
          <ol>
            <li>{{ $t("privacy.toc.s1") }}</li>
            <li>{{ $t("privacy.toc.s2") }}</li>
            <li>{{ $t("privacy.toc.s3") }}</li>
            <li>{{ $t("privacy.toc.s4") }}</li>
            <li>{{ $t("privacy.toc.s5") }}</li>
            <li>{{ $t("privacy.toc.s6") }}</li>
            <li>{{ $t("privacy.toc.s7") }}</li>
          </ol>
        </section>

        <!-- Section 1: Scope -->
        <section>
          <h2>{{ $t("privacy.s1.title") }}</h2>
          <p>{{ $t("privacy.s1.p1") }}</p>
          <p>{{ $t("privacy.s1.p2") }}</p>
        </section>

        <!-- Section 2: Information Collection -->
        <section>
          <h2>{{ $t("privacy.s2.title") }}</h2>
          <p>{{ $t("privacy.s2.intro") }}</p>
          
          <h3>1. {{ $t("privacy.s2.sub1.title") }}</h3>
          <p>{{ $t("privacy.s2.sub1.desc") }}</p>
          
          <h3>2. {{ $t("privacy.s2.sub2.title") }}</h3>
          <p>{{ $t("privacy.s2.sub2.desc") }}</p>
          
          <h3>3. {{ $t("privacy.s2.sub3.title") }}</h3>
          <p>{{ $t("privacy.s2.sub3.desc") }}</p>
          
          <h3>4. {{ $t("privacy.s2.sub4.title") }}</h3>
          <p>{{ $t("privacy.s2.sub4.desc") }}</p>
          
          <h3>5. {{ $t("privacy.s2.sub5.title") }}</h3>
          <p>{{ $t("privacy.s2.sub5.desc") }}</p>
          
          <h3>6. {{ $t("privacy.s2.sub6.title") }}</h3>
          <p>{{ $t("privacy.s2.sub6.desc") }}</p>
          
          <h3>7. {{ $t("privacy.s2.sub7.title") }}</h3>
          <p>{{ $t("privacy.s2.sub7.desc") }}</p>
        </section>

        <!-- Section 3: Information Sharing -->
        <section>
          <h2>{{ $t("privacy.s3.title") }}</h2>
          
          <h3>1. {{ $t("privacy.s3.sub1.title") }}</h3>
          <p>{{ $t("privacy.s3.sub1.desc") }}</p>
          
          <h3>2. {{ $t("privacy.s3.sub2.title") }}</h3>
          <p>{{ $t("privacy.s3.sub2.desc") }}</p>
          
          <h3>3. {{ $t("privacy.s3.sub3.title") }}</h3>
          <p>{{ $t("privacy.s3.sub3.desc") }}</p>
          
          <h3>4. {{ $t("privacy.s3.sub4.title") }}</h3>
          <p>{{ $t("privacy.s3.sub4.desc") }}</p>
        </section>

        <!-- Section 4: Your Rights -->
        <section>
          <h2>{{ $t("privacy.s4.title") }}</h2>
          <p>{{ $t("privacy.s4.p1") }}</p>
          <p>{{ $t("privacy.s4.p2") }}</p>
          <ul>
            <li>{{ $t("privacy.s4.item1") }}</li>
            <li>{{ $t("privacy.s4.item2") }}</li>
            <li>{{ $t("privacy.s4.item3") }}</li>
            <li>{{ $t("privacy.s4.item4") }}</li>
            <li>{{ $t("privacy.s4.item5") }}</li>
          </ul>
          <p>{{ $t("privacy.s4.p3") }}</p>
        </section>

        <!-- Section 5: Information Storage -->
        <section>
          <h2>{{ $t("privacy.s5.title") }}</h2>
          <p>{{ $t("privacy.s5.p1") }}</p>
          <p>{{ $t("privacy.s5.p2") }}</p>
        </section>

        <!-- Section 6: Minor Protection -->
        <section>
          <h2>{{ $t("privacy.s6.title") }}</h2>
          <p>{{ $t("privacy.s6.p1") }}</p>
          <p>{{ $t("privacy.s6.p2") }}</p>
        </section>

        <!-- Section 7: Contact -->
        <section>
          <h2>{{ $t("privacy.s7.title") }}</h2>
          <p>{{ $t("privacy.s7.p1") }}</p>
          <p><strong>{{ $t("privacy.s7.company") }}:</strong> {{ $t("privacy.s7.companyValue") }}</p>
          <p><strong>{{ $t("privacy.s7.email") }}:</strong> <a href="mailto:hello@jdchat.example">hello@jdchat.example</a></p>
          <p><strong>{{ $t("privacy.s7.address") }}:</strong> {{ $t("privacy.s7.addressValue") }}</p>
        </section>

        <!-- SDK Appendix -->
        <section>
          <h2>{{ $t("privacy.sdk.title") }}</h2>
          <p>{{ $t("privacy.sdk.intro") }}</p>
          <p>{{ $t("privacy.sdk.note") }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-content section {
  margin-bottom: 28px;
}

.legal-content h2 {
  font-size: 20px;
  margin-bottom: 12px;
  margin-top: 24px;
  color: var(--color-primary);
}

.legal-content h3 {
  font-size: 17px;
  margin-bottom: 10px;
  margin-top: 16px;
  color: var(--color-text);
}

.legal-content p {
  color: var(--color-muted);
  line-height: 1.8;
  margin-bottom: 10px;
}

.legal-content ul, .legal-content ol {
  margin-top: 12px;
  padding-left: 24px;
  color: var(--color-muted);
}

.legal-content li {
  margin-bottom: 8px;
}
</style>
