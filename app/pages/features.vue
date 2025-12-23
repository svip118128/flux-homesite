<template>
  <section class="container section">
    <h1>{{ $t("page.title.features") }}</h1>
    <p class="lead">{{ $t("features.lead") }}</p>
    <table class="table-like">
      <thead>
        <tr>
          <th>{{ $t("table.feature") }}</th>
          <th>{{ $t("table.desc") }}</th>
          <th>{{ $t("table.status") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>E2E</td>
          <td>{{ $t("feature.e2e.desc") }}</td>
          <td>{{ $t("status.ready") }}</td>
        </tr>
        <tr>
          <td>AV</td>
          <td>{{ $t("feature.av.desc") }}</td>
          <td>{{ $t("status.ready") }}</td>
        </tr>
        <tr>
          <td>Bot</td>
          <td>{{ $t("feature.bot.desc") }}</td>
          <td>{{ $t("status.dev") }}</td>
        </tr>
        <tr>
          <td>Audit</td>
          <td>{{ $t("feature.audit.desc") }}</td>
          <td>{{ $t("status.ready") }}</td>
        </tr>
        <tr>
          <td>SSO</td>
          <td>{{ $t("feature.sso.desc") }}</td>
          <td>{{ $t("status.ready") }}</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>{{ $t("feature.storage.desc") }}</td>
          <td>{{ $t("status.ready") }}</td>
        </tr>
        <tr>
          <td>International</td>
          <td>{{ $t("feature.international.desc") }}</td>
          <td>{{ $t("status.ready") }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
