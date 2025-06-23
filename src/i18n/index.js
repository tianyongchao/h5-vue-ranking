import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from '../i18n/langs/en'
import zhLocale from '../i18n/langs/zh'

Vue.use(VueI18n)

// 引入本地包
const messages = {
  zh: {
    ...zhLocale,
  },
  en: {
    ...enLocale,
  }
}
// 创建国际化实例
const i18n = new VueI18n({
  locale: 'en',
  messages
})
export default i18n