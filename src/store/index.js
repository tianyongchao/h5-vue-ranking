import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import * as getters from './getters'
Vue.use(Vuex)
import { getSessionItem } from '@/common/utils/storageInSession'
import { getLocalItem } from '@/common/utils/storageInLocal'
import { localStorageName } from '@/common/storageName/localStorageName'
import { sessionStorageName } from '@/common/storageName/sessionStorageName'

console.log('vuex')
export default new Vuex.Store({
  state: {
  },
  actions,
  mutations,
  getters
})
