/**
 * Client-side plugin to sync i18n locale with the jdchat_lang cookie
 * This ensures the frontend respects the language set by the server middleware
 * 
 * Priority order:
 * 1. URL query parameter (?lang=xx) - always wins
 * 2. Cookie value set by server middleware
 * 3. localStorage (for backwards compatibility with manual switching)
 */
export default defineNuxtPlugin(() => {
    const { locale, setLocale } = useI18n()
    const route = useRoute()
    const availableLocales = ['zh', 'en', 'vi']

    // 1. Check URL query parameter first (highest priority)
    const langParam = route.query.lang as string | undefined
    if (langParam && availableLocales.includes(langParam)) {
        setLocale(langParam)
        // Also update localStorage so Header.vue's onMounted doesn't override
        if (import.meta.client) {
            localStorage.setItem('jdchat_lang', langParam)
        }
        return
    }

    // 2. Check cookie (set by server middleware)
    const cookie = useCookie('jdchat_lang')
    if (cookie.value && availableLocales.includes(cookie.value)) {
        setLocale(cookie.value)
        // Also update localStorage so Header.vue's onMounted doesn't override
        if (import.meta.client) {
            localStorage.setItem('jdchat_lang', cookie.value)
        }
        return
    }

    // 3. Fallback to localStorage (existing behavior)
    if (import.meta.client) {
        const saved = localStorage.getItem('jdchat_lang')
        if (saved && availableLocales.includes(saved)) {
            setLocale(saved)
        }
    }
})
