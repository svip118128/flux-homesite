import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(PrimeVue, {
    unstyled: true  // No default CSS - use our custom styles
})

app.mount('#app')
