import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Locale } from 'vant'
import VueClipboard from 'vue-clipboard2'
import vueFilterExtend from '@/common/utils/filter';
import './common/rem.js'
import './assets/all.scss'
import 'vant/lib/index.css';
import en from 'vant/es/locale/lang/en-US'
import i18n from './i18n/index'


// css
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import '@/assets/css/font.css'


Locale.use('en-US', en);
Vue.use(Vant);
Vue.use(vueFilterExtend);
Vue.use(VueClipboard);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
