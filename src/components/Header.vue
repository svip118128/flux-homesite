<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { locale } = useI18n();
const router = useRouter();
const isMenuOpen = ref(false);
const selectedLang = ref(locale.value);
const isDropdownOpen = ref(false);

const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'EN' },
    { code: 'vi', label: 'VI' }
];

const currentLangLabel = computed(() => {
    const lang = languages.find(l => l.code === selectedLang.value);
    return lang ? lang.label : 'EN';
});

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    document.body.classList.toggle('menu-open', isMenuOpen.value);
}

const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.classList.remove('menu-open');
}

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
}

const selectLang = (langCode) => {
    locale.value = langCode;
    selectedLang.value = langCode;
    localStorage.setItem('jdchat_lang', langCode);
    document.documentElement.lang = langCode;
    isDropdownOpen.value = false;
}

const closeDropdownOnOutsideClick = (event) => {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        isDropdownOpen.value = false;
    }
}

// Close menu on route change
let unregisterGuard;
onMounted(() => {
    const saved = localStorage.getItem('jdchat_lang');
    if (saved && saved !== locale.value) {
        locale.value = saved;
        selectedLang.value = saved;
    }
    unregisterGuard = router.afterEach(() => {
        closeMenu();
        isDropdownOpen.value = false;
    });
    document.addEventListener('click', closeDropdownOnOutsideClick);
});

onUnmounted(() => {
    if (unregisterGuard) unregisterGuard();
    document.removeEventListener('click', closeDropdownOnOutsideClick);
});

watch(locale, (newVal) => {
    selectedLang.value = newVal;
});
</script>

<template>
  <header class="site-header">
        <div class="container row">
            <router-link class="logo" to="/" aria-label="Jdchat">
                <img :src="'/assets/img/logo.png'" alt="Jdchat" style="height: 32px; width: auto;">
            </router-link>
            <nav class="nav" :class="{ 'active': isMenuOpen }" aria-label="Main Navigation"> 
                <router-link to="/" active-class="active">{{ $t("nav.home") }}</router-link>
                <router-link to="/features" active-class="active">{{ $t("nav.features") }}</router-link>
                <router-link to="/functions" active-class="active">{{ $t("nav.functions") }}</router-link>
                <router-link to="/transfer" active-class="active">{{ $t("nav.transfer") }}</router-link>
                <router-link to="/solutions" active-class="active">{{ $t("nav.solutions") }}</router-link>
                <router-link to="/news" active-class="active">{{ $t("nav.news") }}</router-link>
                <router-link to="/help" active-class="active">{{ $t("nav.help") }}</router-link>
                <router-link to="/faq" active-class="active">{{ $t("nav.faq") }}</router-link>
                <router-link to="/download" active-class="active">{{ $t("nav.download") }}</router-link>
                <!-- Mobile language dropdown inside nav -->
                <div class="mobile-lang-dropdown lang-dropdown">
                    <button class="lang-toggle" @click.stop="toggleDropdown" aria-label="Language">
                        🌐 {{ currentLangLabel }}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <div class="lang-menu" :class="{ 'open': isDropdownOpen }">
                        <button 
                            v-for="lang in languages" 
                            :key="lang.code"
                            class="lang-option"
                            :class="{ 'selected': selectedLang === lang.code }"
                            @click.stop="selectLang(lang.code)"
                        >
                            {{ lang.label }}
                        </button>
                    </div>
                </div>
            </nav>
            <!-- Desktop language dropdown -->
            <div class="controls desktop-only">
                <div class="lang-dropdown">
                    <button class="lang-toggle" @click.stop="toggleDropdown" aria-label="Language">
                        {{ currentLangLabel }}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <div class="lang-menu" :class="{ 'open': isDropdownOpen }">
                        <button 
                            v-for="lang in languages" 
                            :key="lang.code"
                            class="lang-option"
                            :class="{ 'selected': selectedLang === lang.code }"
                            @click.stop="selectLang(lang.code)"
                        >
                            {{ lang.label }}
                        </button>
                    </div>
                </div>
            </div>
            <button class="mobile-toggle" :class="{ 'active': isMenuOpen }" aria-label="Toggle Menu" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
</template>

