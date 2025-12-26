export default defineNuxtPlugin(async (nuxtApp) => {
    const { $i18n } = nuxtApp
    const route = useRoute()

    // Function to switch language if query param is present
    const checkAndSwitchLocale = async (lang: string | null) => {
        // Check if lang is valid and available in defined locales
        if (lang && typeof lang === 'string' && $i18n.locales.value.some((l: any) => l.code === lang)) {
            if ($i18n.locale.value !== lang) {
                await $i18n.setLocale(lang)
            }
        }
    }

    // Initial check on hydration
    await checkAndSwitchLocale(route.query.lang as string)

    // Watch for query changes to handle client-side navigation
    watch(() => route.query.lang, async (newLang) => {
        await checkAndSwitchLocale(newLang as string)
    })
})
