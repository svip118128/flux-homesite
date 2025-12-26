<template>
  <footer class="footer">
        <div class="container cols">
            <div>
                <div class="kicker">{{ $t("footer.cta") }}</div>
                <div class="small">service@jdchat.im</div>
                <div class="small">{{ $t("footer.rights") }}</div>
                <div style="margin-top:8px">
                    <NuxtLink to="/contact">
                        <img src="/assets/icons/mail.svg" width="18" height="18"
                            style="vertical-align:middle;margin-right:6px"> {{ $t("footer.contact") }}
                    </NuxtLink>
                </div>
            </div>
            <div>
                <div class="kicker">Jdchat</div>
                <div><NuxtLink to="/features">{{ $t("nav.features") }}</NuxtLink></div>
                <div><NuxtLink to="/download">{{ $t("nav.download") }}</NuxtLink></div>
                <div><NuxtLink to="/news">{{ $t("nav.news") }}</NuxtLink></div>
            </div>
            <div>
                <div class="kicker">{{ $t("nav.help") }}</div>
                <div><NuxtLink to="/help">{{ $t("footer.docs") }}</NuxtLink></div>
                <div><NuxtLink to="/faq">{{ $t("footer.faq") }}</NuxtLink></div>
            </div>
            <div>
                <div class="kicker">{{ $t("footer.legal") }}</div>
                <div><NuxtLink to="/privacy-policy">{{ $t("footer.privacy") }}</NuxtLink></div>
                <div><NuxtLink to="/terms-of-use">{{ $t("footer.terms") }}</NuxtLink></div>
                <div><NuxtLink to="/sitemap">{{ $t("footer.sitemap") }}</NuxtLink></div>
            </div>
        </div>
    </footer>
</template>
