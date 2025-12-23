<template>
  <section class="hero">
    <div class="container inner">
      <div>
        <div class="badge">
          <img src="/assets/icons/download.svg" alt="" width="18" height="18"><span>{{ $t("transfer.badge") }}</span>
        </div>
        <h1>{{ $t("transfer.title") }}</h1>
        <p class="lead">{{ $t("transfer.lead") }}</p>
        <div class="cta">
          <NuxtLink class="btn primary" to="/contact">{{ $t("transfer.cta.contact") }}</NuxtLink>
          <NuxtLink class="btn" to="/download">{{ $t("transfer.cta.download") }}</NuxtLink>
        </div>
      </div>
      <div class="card" style="padding:16px">
        <div style="border:1px dashed rgba(255,255,255,.2); border-radius:12px; padding:20px; text-align:center">
          <div class="small">{{ $t("transfer.drop.tip") }}</div>
          <div style="margin-top:10px"><a class="btn">{{ $t("transfer.chooseFiles") }}</a></div>
        </div>
        <div class="small" style="margin-top:8px">{{ $t("transfer.note") }}</div>
      </div>
    </div>
  </section>

  <section class="container section">
    <div class="grid-3">
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/bolt.svg" width="28" height="28" alt=""></div>
        <div>
          <h3>{{ $t("transfer.f1") }}</h3>
          <p class="small">{{ $t("transfer.f1.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/lock.svg" width="28" height="28" alt=""></div>
        <div>
          <h3>{{ $t("transfer.f2") }}</h3>
          <p class="small">{{ $t("transfer.f2.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/globe.svg" width="28" height="28" alt=""></div>
        <div>
          <h3>{{ $t("transfer.f3") }}</h3>
          <p class="small">{{ $t("transfer.f3.desc") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
