<template>
  <section class="container section">
    <h1>{{ $t("page.title.contact") }}</h1>
    <p class="lead">{{ $t("contact.lead") }}</p>
    <form id="contact-form" class="card" style="padding:16px" @submit.prevent>
      <div class="row">
        <div><label>{{ $t("contact.label.name") }}</label><input name="name" required></div>
        <div><label>{{ $t("contact.label.email") }}</label><input type="email" name="email" required></div>
      </div>
      <div class="row">
        <div><label>{{ $t("contact.label.phone") }}</label><input name="phone"></div>
        <div><label>{{ $t("contact.label.edition") }}</label>
          <select name="edition">
            <option>{{ $t("contact.option.private") }}</option>
            <option>{{ $t("contact.option.cloud") }}</option>
          </select>
        </div>
      </div>
      <div><label>{{ $t("contact.label.message") }}</label><textarea name="message" rows="5"
          :placeholder="$t('contact.placeholder')"></textarea></div>
      <div style="margin-top:12px; display: flex; gap: 12px;">
        <button class="btn primary" type="submit" style="flex: 1;">{{ $t("contact.submit") }}</button> 
        <a class="btn" href="mailto:hello@jdchat.app" style="flex: 1; text-align: center;">{{ $t("contact.emailDirect") }}</a>
      </div>
    </form>
    <p class="small notice" style="margin-top:12px">{{ $t("contact.notice") }}</p>
  </section>
</template>
