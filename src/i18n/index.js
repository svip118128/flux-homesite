import { createI18n } from 'vue-i18n'
import messages from './locales'
import termsMessages from './terms'
import privacyMessages from './privacy'

// Merge all translations into main messages
const mergedMessages = {
    zh: { ...messages.zh, ...termsMessages.zh, ...privacyMessages.zh },
    en: { ...messages.en, ...termsMessages.en, ...privacyMessages.en },
    vi: { ...messages.vi, ...termsMessages.vi, ...privacyMessages.vi },
}

const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: localStorage.getItem('jdchat_lang') || 'zh',
    fallbackLocale: 'zh',
    messages: mergedMessages,
})

export default i18n

