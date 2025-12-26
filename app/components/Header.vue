<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

const { locale, setLocale } = useI18n();
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

const selectLang = async (langCode) => {
    await setLocale(langCode);
    selectedLang.value = langCode;
    localStorage.setItem('jdchat_lang', langCode);
    
    // Update cookie to persist across reloads (prevents server middleware from overwriting)
    const langCookie = useCookie('jdchat_lang', { maxAge: 60 * 60 * 24 * 365, path: '/' });
    langCookie.value = langCode;
    
    document.documentElement.lang = langCode;
    isDropdownOpen.value = false;
    
    // Update URL query param if it exists
    const route = useRoute();
    if (route.query.lang) {
        router.replace({ query: { ...route.query, lang: langCode } });
    }
}

const closeDropdownOnOutsideClick = (event) => {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        isDropdownOpen.value = false;
    }
}

// Close menu on route change
let unregisterGuard;
onMounted(async () => {
    // Check cookie first (set by URL param via server middleware)
    const cookieValue = useCookie('jdchat_lang').value;
    const saved = cookieValue || localStorage.getItem('jdchat_lang');
    if (saved && saved !== locale.value) {
        await setLocale(saved);
        selectedLang.value = saved;
        // Sync localStorage with cookie value
        if (cookieValue) {
            localStorage.setItem('jdchat_lang', cookieValue);
        }
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
            <NuxtLink class="logo" to="/" aria-label="Jdchat">
                <img src="/assets/img/logo.png" alt="Jdchat" style="height: 32px; width: auto;">
            </NuxtLink>
            <nav class="nav" :class="{ 'active': isMenuOpen }" aria-label="Main Navigation"> 
                <NuxtLink to="/" active-class="active">{{ $t("nav.home") }}</NuxtLink>
                <NuxtLink to="/features" active-class="active">{{ $t("nav.features") }}</NuxtLink>
                <NuxtLink to="/functions" active-class="active">{{ $t("nav.functions") }}</NuxtLink>
                <NuxtLink to="/transfer" active-class="active">{{ $t("nav.transfer") }}</NuxtLink>
                <NuxtLink to="/solutions" active-class="active">{{ $t("nav.solutions") }}</NuxtLink>
                <NuxtLink to="/news" active-class="active">{{ $t("nav.news") }}</NuxtLink>
                <NuxtLink to="/help" active-class="active">{{ $t("nav.help") }}</NuxtLink>
                <NuxtLink to="/faq" active-class="active">{{ $t("nav.faq") }}</NuxtLink>
                <NuxtLink to="/download" active-class="active">{{ $t("nav.download") }}</NuxtLink>
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
