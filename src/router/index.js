import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import FunctionsView from '../views/FunctionsView.vue'
import TransferView from '../views/TransferView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import NewsView from '../views/NewsView.vue'
import HelpView from '../views/HelpView.vue'
import FaqView from '../views/FaqView.vue'
import DownloadView from '../views/DownloadView.vue'
import ContactView from '../views/ContactView.vue'
import HelpCreateTeamView from '../views/HelpCreateTeamView.vue'
import HelpEnable2faView from '../views/HelpEnable2faView.vue'
import HelpImportUsersView from '../views/HelpImportUsersView.vue'
import NewsV1LaunchView from '../views/NewsV1LaunchView.vue'
import NewsAiAssistantView from '../views/NewsAiAssistantView.vue'
import SitemapView from '../views/SitemapView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsOfUseView from '../views/TermsOfUseView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/features',
            name: 'features',
            component: FeaturesView,
        },
        {
            path: '/functions',
            name: 'functions',
            component: FunctionsView,
        },
        {
            path: '/transfer',
            name: 'transfer',
            component: TransferView,
        },
        {
            path: '/solutions',
            name: 'solutions',
            component: SolutionsView,
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/news/v1-launch',
            name: 'news-v1-launch',
            component: NewsV1LaunchView,
        },
        {
            path: '/news/ai-assistant',
            name: 'news-ai-assistant',
            component: NewsAiAssistantView,
        },
        {
            path: '/help',
            name: 'help',
            component: HelpView,
        },
        {
            path: '/help/create-team',
            name: 'help-create-team',
            component: HelpCreateTeamView,
        },
        {
            path: '/help/enable-2fa',
            name: 'help-enable-2fa',
            component: HelpEnable2faView,
        },
        {
            path: '/help/import-users',
            name: 'help-import-users',
            component: HelpImportUsersView,
        },
        {
            path: '/faq',
            name: 'faq',
            component: FaqView,
        },
        {
            path: '/download',
            name: 'download',
            component: DownloadView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/sitemap',
            name: 'sitemap',
            component: SitemapView,
        },
        {
            path: '/privacy-policy',
            name: 'privacy-policy',
            component: PrivacyPolicyView,
        },
        {
            path: '/terms-of-use',
            name: 'terms-of-use',
            component: TermsOfUseView,
        },
    ],
})

export default router

