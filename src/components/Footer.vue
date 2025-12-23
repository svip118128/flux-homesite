<template>
  <footer class="footer">
        <div class="container cols">
            <div>
                <div class="kicker">{{ $t("footer.cta") }}</div>
                <div class="small">hello@jdchat.example</div>
                <div class="small">{{ $t("footer.rights") }}</div>
                <div style="margin-top:8px">
                    <router-link to="/contact">
                        <img :src="'/assets/icons/mail.svg'" width="18" height="18"
                            style="vertical-align:middle;margin-right:6px"> {{ $t("footer.contact") }}
                    </router-link>
                </div>
            </div>
            <div>
                <div class="kicker">Jdchat</div>
                <div><router-link to="/features">{{ $t("nav.features") }}</router-link></div>
                <div><router-link to="/download">{{ $t("nav.download") }}</router-link></div>
                <div><router-link to="/news">{{ $t("nav.news") }}</router-link></div>
            </div>
            <div>
                <div class="kicker">{{ $t("nav.help") }}</div>
                <div><router-link to="/help">{{ $t("footer.docs") }}</router-link></div>
                <div><router-link to="/faq">{{ $t("footer.faq") }}</router-link></div>
            </div>
            <div>
                <div class="kicker">{{ $t("footer.legal") }}</div>
                <div><router-link to="/privacy-policy">{{ $t("footer.privacy") }}</router-link></div>
                <div><router-link to="/terms-of-use">{{ $t("footer.terms") }}</router-link></div>
                <div><router-link to="/sitemap">{{ $t("footer.sitemap") }}</router-link></div>
            </div>
        </div>
    </footer>
</template>
