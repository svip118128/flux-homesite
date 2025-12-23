<template>
  <div class="section">
    <div class="container">
      <h1>{{ $t("terms.title") }}</h1>
      <p class="lead">{{ $t("terms.updateDate") }}: 2025-12-11</p>
      <p class="lead">{{ $t("terms.effectiveDate") }}: 2025-12-11</p>

      <div class="legal-content card" style="padding: 24px; margin-top: 24px;">
        <p class="intro">{{ $t("terms.welcome") }}</p>

        <!-- Section 1: Definitions -->
        <section>
          <h2>{{ $t("terms.s1.title") }}</h2>
          <p>1. {{ $t("terms.s1.p1") }}</p>
          <p>2. {{ $t("terms.s1.p2") }}</p>
          <p>3. {{ $t("terms.s1.p3") }}</p>
          <p>4. {{ $t("terms.s1.p4") }}</p>
          <p>5. {{ $t("terms.s1.p5") }}</p>
        </section>

        <!-- Section 2: Contracting Parties -->
        <section>
          <h2>{{ $t("terms.s2.title") }}</h2>
          <p>1. {{ $t("terms.s2.p1") }}</p>
          <p>2. {{ $t("terms.s2.p2") }}</p>
          <p>3. {{ $t("terms.s2.p3") }}</p>
        </section>

        <!-- Section 3: Agreement Content and Effect -->
        <section>
          <h2>{{ $t("terms.s3.title") }}</h2>
          <p>1. {{ $t("terms.s3.p1") }}</p>
          <p>2. {{ $t("terms.s3.p2") }}</p>
        </section>

        <!-- Section 4: Service Content -->
        <section>
          <h2>{{ $t("terms.s4.title") }}</h2>
          <h3>{{ $t("terms.s4.sub1.title") }}</h3>
          <p>1. {{ $t("terms.s4.sub1.p1") }}</p>
          <p>2. {{ $t("terms.s4.sub1.p2") }}</p>
          <p>3. {{ $t("terms.s4.sub1.p3") }}</p>
          
          <h3>{{ $t("terms.s4.sub2.title") }}</h3>
          <p>{{ $t("terms.s4.sub2.intro") }}</p>
          <h4>1. {{ $t("terms.s4.sub2.personal.title") }}</h4>
          <p>{{ $t("terms.s4.sub2.personal.desc") }}</p>
          <h4>2. {{ $t("terms.s4.sub2.enterprise.title") }}</h4>
          <p>{{ $t("terms.s4.sub2.enterprise.desc") }}</p>
        </section>

        <!-- Section 5: Software License -->
        <section>
          <h2>{{ $t("terms.s5.title") }}</h2>
          <p>1. {{ $t("terms.s5.p1") }}</p>
          <p>2. {{ $t("terms.s5.p2") }}</p>
          <p>3. {{ $t("terms.s5.p3") }}</p>
        </section>

        <!-- Section 6: Software Updates -->
        <section>
          <h2>{{ $t("terms.s6.title") }}</h2>
          <p>1. {{ $t("terms.s6.p1") }}</p>
          <p>2. {{ $t("terms.s6.p2") }}</p>
          <p>3. {{ $t("terms.s6.p3") }}</p>
        </section>

        <!-- Section 7: Account Registration -->
        <section>
          <h2>{{ $t("terms.s7.title") }}</h2>
          <p>{{ $t("terms.s7.intro") }}</p>
        </section>

        <!-- Section 8: Usage Rules -->
        <section>
          <h2>{{ $t("terms.s8.title") }}</h2>
          <p>{{ $t("terms.s8.intro") }}</p>
          <h3>{{ $t("terms.s8.sub1.title") }}</h3>
          <p>{{ $t("terms.s8.sub1.desc") }}</p>
          <h3>{{ $t("terms.s8.sub2.title") }}</h3>
          <p>{{ $t("terms.s8.sub2.desc") }}</p>
          <h3>{{ $t("terms.s8.sub3.title") }}</h3>
          <p>{{ $t("terms.s8.sub3.desc") }}</p>
        </section>

        <!-- Section 9: Service Fees -->
        <section>
          <h2>{{ $t("terms.s9.title") }}</h2>
          <p>1. {{ $t("terms.s9.p1") }}</p>
          <p>2. {{ $t("terms.s9.p2") }}</p>
          <p>3. {{ $t("terms.s9.p3") }}</p>
        </section>

        <!-- Section 10: Service Termination -->
        <section>
          <h2>{{ $t("terms.s10.title") }}</h2>
          <p>1. {{ $t("terms.s10.p1") }}</p>
          <p>2. {{ $t("terms.s10.p2") }}</p>
        </section>

        <!-- Section 11: Privacy Policy -->
        <section>
          <h2>{{ $t("terms.s11.title") }}</h2>
          <p>1. {{ $t("terms.s11.p1") }}</p>
          <p>2. {{ $t("terms.s11.p2") }}</p>
          <p>3. {{ $t("terms.s11.p3") }}</p>
        </section>

        <!-- Section 12: Limited Liability -->
        <section>
          <h2>{{ $t("terms.s12.title") }}</h2>
          <p>1. {{ $t("terms.s12.p1") }}</p>
          <p>2. {{ $t("terms.s12.p2") }}</p>
          <p>3. {{ $t("terms.s12.p3") }}</p>
          <p>4. {{ $t("terms.s12.p4") }}</p>
        </section>

        <!-- Section 13: Dispute Resolution -->
        <section>
          <h2>{{ $t("terms.s13.title") }}</h2>
          <p>1. {{ $t("terms.s13.p1") }}</p>
          <p>2. {{ $t("terms.s13.p2") }}</p>
        </section>

        <!-- Section 14: Contact -->
        <section>
          <h2>{{ $t("terms.s14.title") }}</h2>
          <p>{{ $t("terms.s14.intro") }}</p>
          <p><strong>{{ $t("terms.s14.address") }}:</strong> {{ $t("terms.s14.addressValue") }}</p>
          <p><strong>{{ $t("terms.s14.email") }}:</strong> <a href="mailto:hello@jdchat.example">hello@jdchat.example</a></p>
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

.legal-content h4 {
  font-size: 15px;
  margin-bottom: 8px;
  margin-top: 12px;
  color: var(--color-muted);
}

.legal-content p {
  color: var(--color-muted);
  line-height: 1.8;
  margin-bottom: 10px;
}

.legal-content .intro {
  font-size: 16px;
  color: var(--color-text);
  margin-bottom: 20px;
}

.legal-content ul {
  margin-top: 12px;
  padding-left: 24px;
  color: var(--color-muted);
}

.legal-content li {
  margin-bottom: 8px;
}
</style>
