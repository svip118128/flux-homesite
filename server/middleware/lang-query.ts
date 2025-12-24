/**
 * Server middleware to handle language detection and switching via URL query parameter
 * Priority:
 * 1. URL query parameter (?lang=en, ?lang=zh, ?lang=vi)
 * 2. Existing cookie
 * 3. Browser Accept-Language header
 * 4. Default (en)
 */
export default defineEventHandler((event) => {
    const query = getQuery(event)
    const langParam = query.lang as string | undefined
    const availableLocales = ['zh', 'en', 'vi']
    const cookieName = 'jdchat_lang'
    const defaultLocale = 'en'

    // 1. Check URL query parameter first (highest priority)
    if (langParam && availableLocales.includes(langParam)) {
        setCookie(event, cookieName, langParam, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365 // 1 year
        })
        return
    }

    // 2. Check existing cookie
    const existingCookie = getCookie(event, cookieName)
    if (existingCookie && availableLocales.includes(existingCookie)) {
        return // Keep existing cookie
    }

    // 3. Detect from browser Accept-Language header
    const acceptLanguage = getHeader(event, 'accept-language')
    if (acceptLanguage) {
        // Parse Accept-Language header: "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7"
        const languages = acceptLanguage
            .split(',')
            .map(lang => {
                const [code, q = 'q=1'] = lang.trim().split(';')
                const quality = parseFloat(q.replace('q=', '')) || 1
                const primaryCode = code.split('-')[0].toLowerCase()
                return { code: primaryCode, quality }
            })
            .sort((a, b) => b.quality - a.quality)

        // Find the first language that matches our available locales
        for (const lang of languages) {
            if (availableLocales.includes(lang.code)) {
                setCookie(event, cookieName, lang.code, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 365
                })
                return
            }
        }
    }

    // 4. Fallback to default locale
    setCookie(event, cookieName, defaultLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
    })
})
