import en from './en.json'
import ru from './ru.json'

const languages = { en, ru }

export default {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  strategy: 'no_prefix',
  vueI18n: {
    fallbackLocale: 'ru',
    messages: Object.assign(languages)
  }
}