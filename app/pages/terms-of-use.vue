<template>
  <!-- Force rebuild -->
  <div class="section">
    <div class="container">
      <h1>{{ $t('terms.title') }}</h1>
      <p class="lead">{{ $t('terms.lastUpdated') }}</p>
      <p class="lead">{{ $t('terms.effectiveDate') }}</p>

      <div class="legal-content card" style="padding: 24px; margin-top: 24px;">
        <p class="intro">{{ $t('terms.intro') }}</p>

        <!-- I. Definitions -->
        <section>
          <h2>{{ $t('terms.s1.title') }}</h2>
          <h3>{{ $t('terms.s1.individualUser.title') }}</h3>
          <p>{{ $t('terms.s1.individualUser.p1') }}</p>
          
          <h3>{{ $t('terms.s1.orgUser.title') }}</h3>
          <p>{{ $t('terms.s1.orgUser.p1') }}</p>
          <p>{{ $t('terms.s1.orgUser.p2') }}</p>

          <h3>{{ $t('terms.s1.admin.title') }}</h3>
          <p>{{ $t('terms.s1.admin.p1') }}</p>

          <h3>{{ $t('terms.s1.data.title') }}</h3>
          <p>{{ $t('terms.s1.data.p1') }}</p>

          <h3>{{ $t('terms.s1.processor.title') }}</h3>
          <p>{{ $t('terms.s1.processor.p1') }}</p>
          <p>{{ $t('terms.s1.processor.p2') }}</p>
          <ul>
            <li>{{ $t('terms.s1.processor.li1') }}</li>
            <li>{{ $t('terms.s1.processor.li2') }}</li>
          </ul>
        </section>

        <!-- II. Contracting Parties -->
        <section>
          <h2>{{ $t('terms.s2.title') }}</h2>
          <p>{{ $t('terms.s2.p1') }}</p>
          <p>{{ $t('terms.s2.p2') }}</p>
          <p>{{ $t('terms.s2.p3') }}</p>
        </section>

        <!-- III. Agreement Content and Effect -->
        <section>
          <h2>{{ $t('terms.s3.title') }}</h2>
          <p>{{ $t('terms.s3.p1') }}</p>
          <p>{{ $t('terms.s3.p2') }}</p>
        </section>

        <!-- IV. Services -->
        <section>
          <h2>{{ $t('terms.s4.title') }}</h2>
          
          <h3>{{ $t('terms.s4.sub1.title') }}</h3>
          <p>{{ $t('terms.s4.sub1.p1') }}</p>
          <p>{{ $t('terms.s4.sub1.p2') }}</p>
          <p>{{ $t('terms.s4.sub1.p3') }}</p>

          <h3>{{ $t('terms.s4.sub2.title') }}</h3>
          <p>{{ $t('terms.s4.sub2.intro') }}</p>

          <h4>{{ $t('terms.s4.sub2.indiv.title') }}</h4>
          <p>{{ $t('terms.s4.sub2.indiv.p1') }}</p>
          <ul>
            <li>{{ $t('terms.s4.sub2.indiv.li1') }}</li>
            <li>{{ $t('terms.s4.sub2.indiv.li2') }}</li>
            <li>{{ $t('terms.s4.sub2.indiv.li3') }}</li>
          </ul>

          <h4>{{ $t('terms.s4.sub2.ent.title') }}</h4>
          <p>{{ $t('terms.s4.sub2.ent.p1') }}</p>
          <ul>
            <li>{{ $t('terms.s4.sub2.ent.li1') }}</li>
            <li>{{ $t('terms.s4.sub2.ent.li2') }}</li>
            <li>{{ $t('terms.s4.sub2.ent.li3') }}</li>
            <li>{{ $t('terms.s4.sub2.ent.li4') }}</li>
            <li>{{ $t('terms.s4.sub2.ent.li5') }}</li>
          </ul>

          <h3>{{ $t('terms.s4.sub3.title') }}</h3>
          <h4>{{ $t('terms.s4.sub3.entData.title') }}</h4>
          <p>{{ $t('terms.s4.sub3.entData.p1') }}</p>

          <h4>{{ $t('terms.s4.sub3.userData.title') }}</h4>
          <p>{{ $t('terms.s4.sub3.userData.p1') }}</p>
        </section>

        <!-- V. Software License -->
        <section>
          <h2>{{ $t('terms.s5.title') }}</h2>
          <p>{{ $t('terms.s5.p1') }}</p>
          <p>{{ $t('terms.s5.p2') }}</p>
          <p>{{ $t('terms.s5.p3') }}</p>
        </section>

        <!-- VI. Software Updates -->
        <section>
          <h2>{{ $t('terms.s6.title') }}</h2>
          <p>{{ $t('terms.s6.p1') }}</p>
        </section>

        <!-- VII. Account Registration and Management -->
        <section>
          <h2>{{ $t('terms.s7.title') }}</h2>
          <p>{{ $t('terms.s7.intro') }}</p>
          <ul>
            <li>{{ $t('terms.s7.li1') }}</li>
            <li>{{ $t('terms.s7.li2') }}</li>
            <li>{{ $t('terms.s7.li3') }}</li>
          </ul>
          <p>{{ $t('terms.s7.p1') }}</p>
        </section>

        <!-- VIII. JDChat Service Usage Rules -->
        <section>
          <h2>{{ $t('terms.s8.title') }}</h2>
          <p>{{ $t('terms.s8.p1') }}</p>
        </section>

        <!-- IX. JDChat Enforcement Measures -->
        <section>
          <h2>{{ $t('terms.s9.title') }}</h2>
          <p>{{ $t('terms.s9.p1') }}</p>
        </section>

        <!-- X. Service Fees -->
        <section>
          <h2>{{ $t('terms.s10.title') }}</h2>
          <p>{{ $t('terms.s10.p1') }}</p>
        </section>

        <!-- XI. Service Suspension or Termination -->
        <section>
          <h2>{{ $t('terms.s11.title') }}</h2>
          <p>{{ $t('terms.s11.p1') }}</p>
        </section>

        <!-- XII. Privacy Policy -->
        <section>
          <h2>{{ $t('terms.s12.title') }}</h2>
          <p>{{ $t('terms.s12.p1') }}</p>
        </section>

        <!-- XIII. Limitation of Liability -->
        <section>
          <h2>{{ $t('terms.s13.title') }}</h2>
          <p>{{ $t('terms.s13.p1') }}</p>
        </section>

        <!-- XIV. Breach and Compensation -->
        <section>
          <h2>{{ $t('terms.s14.title') }}</h2>
          <p>{{ $t('terms.s14.p1') }}</p>
        </section>

        <!-- XV. Notices -->
        <section>
          <h2>{{ $t('terms.s15.title') }}</h2>
          <p>{{ $t('terms.s15.p1') }}</p>
        </section>

        <!-- XVI. Governing Law and Dispute Resolution -->
        <section>
          <h2>{{ $t('terms.s16.title') }}</h2>
          <p>{{ $t('terms.s16.p1') }}</p>
        </section>

        <!-- XVII. Contact Information -->
        <section>
          <h2>{{ $t('terms.s17.title') }}</h2>
          <p>{{ $t('terms.s17.p1') }}</p>
          <p>{{ $t('terms.s17.p2') }}</p>
          <p>{{ $t('terms.s17.email') }}: <a href="mailto:feiyun88888888@gmail.com">feiyun88888888@gmail.com</a></p>
          <p>
            {{ $t('terms.s17.address') }}:<br>
            {{ $t('terms.s17.addressValue') }}
          </p>
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
