import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import Tres from '@tresjs/core'



//translations
import en from './translations/en';
import fr from './translations/fr';
import ar from './translations/ar';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'


//vuetify
const vuetify = createVuetify({
  components,
  directives,
})

//Vue I18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  availableLocales: ['ar', 'en', 'fr'],
  messages: {
    ar,
    en,
    fr,
  }
})

//lazy-image-loading-css
import "vue-progressive-image/dist/style.css";


const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(i18n)
app.use(Tres)


app.mount('#app')
