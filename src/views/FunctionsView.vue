<template>
  <section class="container section">
    <h1>{{ $t("page.title.functions") }}</h1>
    <div class="grid-4">
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/chat.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.chat") }}</h3>
          <p>{{ $t("func.chat.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/lock.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.security") }}</h3>
          <p>{{ $t("func.security.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/bolt.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.performance") }}</h3>
          <p>{{ $t("func.performance.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/globe.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.collab") }}</h3>
          <p>{{ $t("func.collab.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/help.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.support") }}</h3>
          <p>{{ $t("func.support.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/news.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.admin") }}</h3>
          <p>{{ $t("func.admin.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/bolt.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.platform") }}</h3>
          <p>{{ $t("func.platform.desc") }}</p>
        </div>
      </div>
      <div class="card feature">
        <div class="icon"><img src="/assets/icons/download.svg" alt=""></div>
        <div>
          <h3>{{ $t("func.multi") }}</h3>
          <p>{{ $t("func.multi.desc") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
