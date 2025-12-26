<template>
  <div class="section">
    <div class="container">
      <h1>{{ $t("privacy.title") }}</h1>
      <p class="lead">{{ $t("privacy.lastUpdated") }}</p>
      <p class="lead">{{ $t("privacy.effectiveDate") }}</p>

      <div class="legal-content card" style="padding: 24px; margin-top: 24px;">
        
        <!-- Introduction -->
        <section>
          <h2>{{ $t("privacy.intro.title") }}</h2>
          <p>{{ $t("privacy.intro.p1") }}</p>
          <p><strong>{{ $t("privacy.intro.p2") }}</strong></p>
          <p>{{ $t("privacy.intro.p3") }}</p>
          <ul>
            <li>{{ $t("privacy.intro.item1") }}</li>
            <li>{{ $t("privacy.intro.item2") }}</li>
            <li>{{ $t("privacy.intro.item3") }}</li>
            <li>{{ $t("privacy.intro.item4") }}</li>
            <li>{{ $t("privacy.intro.item5") }}</li>
          </ul>
          <p>{{ $t("privacy.intro.p4") }}</p>
        </section>

        <!-- Table of Contents -->
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
          
          <h3>{{ $t("privacy.s2.sub1.title") }}</h3>
          <p>{{ $t("privacy.s2.sub1.desc") }}</p>
          
          <h3>{{ $t("privacy.s2.sub2.title") }}</h3>
          <p>{{ $t("privacy.s2.sub2.desc") }}</p>
          
          <h3>{{ $t("privacy.s2.sub3.title") }}</h3>
          <p>{{ $t("privacy.s2.sub3.p1") }}</p>
          <p>{{ $t("privacy.s2.sub3.p2") }}</p>
          <p>{{ $t("privacy.s2.sub3.p3") }}</p>
          <p>{{ $t("privacy.s2.sub3.p4") }}</p>
          
          <h3>{{ $t("privacy.s2.sub4.title") }}</h3>
          <p>{{ $t("privacy.s2.sub4.intro") }}</p>
          <ul>
            <li>{{ $t("privacy.s2.sub4.item1") }}</li>
            <li>{{ $t("privacy.s2.sub4.item2") }}</li>
            <li>{{ $t("privacy.s2.sub4.item3") }}</li>
            <li>{{ $t("privacy.s2.sub4.item4") }}</li>
            <li>{{ $t("privacy.s2.sub4.item5") }}</li>
            <li>{{ $t("privacy.s2.sub4.item6") }}</li>
            <li>{{ $t("privacy.s2.sub4.item7") }}</li>
          </ul>
          <p>{{ $t("privacy.s2.sub4.p1") }}</p>
          
          <h3>{{ $t("privacy.s2.sub5.title") }}</h3>
          <p>{{ $t("privacy.s2.sub5.p1") }}</p>
          <p>{{ $t("privacy.s2.sub5.p2") }}</p>
          
          <h3>{{ $t("privacy.s2.sub6.title") }}</h3>
          <p>{{ $t("privacy.s2.sub6.p1") }}</p>
          <p>{{ $t("privacy.s2.sub6.p2") }}</p>
          
          <h3>{{ $t("privacy.s2.sub7.title") }}</h3>
          <p>{{ $t("privacy.s2.sub7.p1") }}</p>
          <p>{{ $t("privacy.s2.sub7.p2") }}</p>
        </section>

        <!-- Section 3: Information Sharing -->
        <section>
          <h2>{{ $t("privacy.s3.title") }}</h2>
          
          <h3>{{ $t("privacy.s3.sub1.title") }}</h3>
          <p>{{ $t("privacy.s3.sub1.desc") }}</p>
          
          <h3>{{ $t("privacy.s3.sub2.title") }}</h3>
          <p>{{ $t("privacy.s3.sub2.intro") }}</p>
          <ul>
            <li>{{ $t("privacy.s3.sub2.item1") }}</li>
            <li>{{ $t("privacy.s3.sub2.item2") }}</li>
          </ul>
          
          <h3>{{ $t("privacy.s3.sub3.title") }}</h3>
          <p>{{ $t("privacy.s3.sub3.desc") }}</p>
          
          <h3>{{ $t("privacy.s3.sub4.title") }}</h3>
          <p>{{ $t("privacy.s3.sub4.intro") }}</p>
          <ul>
            <li>{{ $t("privacy.s3.sub4.item1") }}</li>
            <li>{{ $t("privacy.s3.sub4.item2") }}</li>
            <li>{{ $t("privacy.s3.sub4.item3") }}</li>
            <li>{{ $t("privacy.s3.sub4.item4") }}</li>
            <li>{{ $t("privacy.s3.sub4.item5") }}</li>
            <li>{{ $t("privacy.s3.sub4.item6") }}</li>
          </ul>
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
          <p>{{ $t("privacy.s4.p4") }}</p>
          <p>{{ $t("privacy.s4.p5") }}</p>
          <p>{{ $t("privacy.s4.p6") }}</p>
          <ul>
            <li>{{ $t("privacy.s4.cancelItem") }}</li>
          </ul>
          <p>{{ $t("privacy.s4.p7") }}</p>
          <p>{{ $t("privacy.s4.p8") }}</p>
          <p>{{ $t("privacy.s4.p9") }}</p>
          <p>{{ $t("privacy.s4.p10") }}</p>
        </section>

        <!-- Section 5: Information Storage -->
        <section>
          <h2>{{ $t("privacy.s5.title") }}</h2>
          <p>{{ $t("privacy.s5.p1") }}</p>
          <p>{{ $t("privacy.s5.p2") }}</p>
          <ul>
            <li>{{ $t("privacy.s5.item1") }}</li>
            <li>{{ $t("privacy.s5.item2") }}</li>
            <li>{{ $t("privacy.s5.item3") }}</li>
            <li>{{ $t("privacy.s5.item4") }}</li>
            <li>{{ $t("privacy.s5.item5") }}</li>
          </ul>
          <p>{{ $t("privacy.s5.p3") }}</p>
          <p>{{ $t("privacy.s5.p4") }}</p>
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
          <p>{{ $t("privacy.s7.p2") }}</p>
          <p>{{ $t("privacy.s7.p3") }}</p>
          <p><strong>{{ $t("privacy.s7.address") }}:</strong> {{ $t("privacy.s7.addressValue") }}</p>
          <p>{{ $t("privacy.s7.p4") }}</p>
          <p><strong>{{ $t("privacy.s7.company") }}:</strong> {{ $t("privacy.s7.companyValue") }}</p>
          <p><strong>{{ $t("privacy.s7.email") }}:</strong> <a :href="'mailto:' + $t('privacy.s7.emailValue')">{{ $t("privacy.s7.emailValue") }}</a></p>
          <p><strong>{{ $t("privacy.s7.effectiveDate") }}</strong></p>
          <p>{{ $t("privacy.s7.end") }}</p>
        </section>

        <!-- SDK Appendix -->
        <section>
          <h2>{{ $t("privacy.sdk.title") }}</h2>
          <p>{{ $t("privacy.sdk.p1") }}</p>
          <p>{{ $t("privacy.sdk.p2") }}</p>
          <p>{{ $t("privacy.sdk.p3") }}</p>
          <p>{{ $t("privacy.sdk.p4") }}</p>
          <p><strong>{{ $t("privacy.sdk.tableIntro") }}</strong></p>
          
          <div class="sdk-table">
            <table>
              <thead>
                <tr>
                  <th>{{ $t("privacy.sdk.th.name") }}</th>
                  <th>{{ $t("privacy.sdk.th.developer") }}</th>
                  <th>{{ $t("privacy.sdk.th.function") }}</th>
                  <th>{{ $t("privacy.sdk.th.info") }}</th>
                  <th>{{ $t("privacy.sdk.th.privacy") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sdk, index) in sdkList" :key="index">
                  <td>{{ $t(sdk.name) }}</td>
                  <td>{{ $t(sdk.developer) }}</td>
                  <td>{{ $t(sdk.function) }}</td>
                  <td>{{ $t(sdk.info) }}</td>
                  <td><a :href="sdk.link" target="_blank">Link</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p><strong>{{ $t("privacy.sdk.note") }}</strong></p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const sdkList = [
  {
    name: "privacy.sdk.row1.name",
    developer: "privacy.sdk.row1.developer",
    function: "privacy.sdk.row1.function",
    info: "privacy.sdk.row1.info",
    link: "https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sdk-data-security-0000001050700772"
  },
  {
    name: "privacy.sdk.row2.name",
    developer: "privacy.sdk.row2.developer",
    function: "privacy.sdk.row2.function",
    info: "privacy.sdk.row2.info",
    link: "https://cloud.tencent.com/document/product/647/57574"
  },
  {
    name: "privacy.sdk.row3.name",
    developer: "privacy.sdk.row3.developer",
    function: "privacy.sdk.row3.function",
    info: "privacy.sdk.row3.info",
    link: "https://cloud.tencent.com/document/product/269/58094"
  },
  {
    name: "privacy.sdk.row4.name",
    developer: "privacy.sdk.row4.developer",
    function: "privacy.sdk.row4.function",
    info: "privacy.sdk.row4.info",
    link: "https://cloud.tencent.com/document/product/454/61839"
  },
  {
    name: "privacy.sdk.row5.name",
    developer: "privacy.sdk.row5.developer",
    function: "privacy.sdk.row5.function",
    info: "privacy.sdk.row5.info",
    link: "https://cloud.tencent.com/document/product/454/61839"
  },
  {
    name: "privacy.sdk.row6.name",
    developer: "privacy.sdk.row6.developer",
    function: "privacy.sdk.row6.function",
    info: "privacy.sdk.row6.info",
    link: "https://cloud.tencent.com/document/product/454/61839"
  },
  {
    name: "privacy.sdk.row7.name",
    developer: "privacy.sdk.row7.developer",
    function: "privacy.sdk.row7.function",
    info: "privacy.sdk.row7.info",
    link: "https://cloud.tencent.com/document/product/584/38857"
  },
  {
    name: "privacy.sdk.row8.name",
    developer: "privacy.sdk.row8.developer",
    function: "privacy.sdk.row8.function",
    info: "privacy.sdk.row8.info",
    link: "https://developer.honor.com/cn/docs/11002"
  },
  {
    name: "privacy.sdk.row9.name",
    developer: "privacy.sdk.row9.developer",
    function: "privacy.sdk.row9.function",
    info: "privacy.sdk.row9.info",
    link: "https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sdk-data-security-0000001050042177"
  },
  {
    name: "privacy.sdk.row10.name",
    developer: "privacy.sdk.row10.developer",
    function: "privacy.sdk.row10.function",
    info: "privacy.sdk.row10.info",
    link: "https://dev.vivo.com.cn/documentCenter/doc/878"
  },
  {
    name: "privacy.sdk.row11.name",
    developer: "privacy.sdk.row11.developer",
    function: "privacy.sdk.row11.function",
    info: "privacy.sdk.row11.info",
    link: "https://open.oppomobile.com/wiki/doc#id=11228"
  },
  {
    name: "privacy.sdk.row12.name",
    developer: "privacy.sdk.row12.developer",
    function: "privacy.sdk.row12.function",
    info: "privacy.sdk.row12.info",
    link: "https://dev.mi.com/console/doc/detail?pId=1822"
  },
  {
    name: "privacy.sdk.row13.name",
    developer: "privacy.sdk.row13.developer",
    function: "privacy.sdk.row13.function",
    info: "privacy.sdk.row13.info",
    link: "https://open.flyme.cn/docs?id=202"
  },
  {
    name: "privacy.sdk.row14.name",
    developer: "privacy.sdk.row14.developer",
    function: "privacy.sdk.row14.function",
    info: "privacy.sdk.row14.info",
    link: "https://docs.getui.com/privacy/"
  },
  {
    name: "privacy.sdk.row15.name",
    developer: "privacy.sdk.row15.developer",
    function: "privacy.sdk.row15.function",
    info: "privacy.sdk.row15.info",
    link: "https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sdk-data-security-0000001058890662"
  },
  {
    name: "privacy.sdk.row16.name",
    developer: "privacy.sdk.row16.developer",
    function: "privacy.sdk.row16.function",
    info: "privacy.sdk.row16.info",
    link: "https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sdk-data-security-0000001050043971"
  }
];
</script>

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

.legal-content a {
  color: var(--color-primary);
  text-decoration: none;
}

.legal-content a:hover {
  text-decoration: underline;
}

.sdk-table {
  overflow-x: auto;
  margin: 20px 0;
}

.sdk-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.sdk-table th,
.sdk-table td {
  border: 1px solid #d1d5db;
  padding: 12px;
  text-align: left;
  vertical-align: top;
}

.sdk-table th {
  background-color: #1e3a5f;
  font-weight: 600;
  color: #ffffff;
}

.sdk-table td {
  color: #1f2937;
  background-color: #f0f4f8;
}

.sdk-table tr:nth-child(even) td {
  background-color: #e2e8f0;
}
</style>
