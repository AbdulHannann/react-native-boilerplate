import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './ar/ar.json'
import en from './en/en.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    ar: ar,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
