import en from './en.json'
import th from './th.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'th',
  messages: {
    en: en,
    th: th
  }
}))