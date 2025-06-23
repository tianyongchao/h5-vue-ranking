import axios from 'axios'
import { Toast, Dialog } from 'vant';
import store from '@/store'
import Vue from 'vue'
Toast.setDefaultOptions({duration: 2000})

const instance = axios.create({
    timeout: 60000,
    baseURL: process.env.VUE_APP_BASE_API
});

instance.interceptors.request.use(
    config => {
        if (store.state.walletInfo.address && store.state.walletTokenObj[store.state.walletInfo.address]) {
            config.headers['tokenInfo'] = store.state.walletTokenObj[store.state.walletInfo.address].token
        }
        return config
    },
    err => {
    }
)

instance.interceptors.response.use(
    response => {

        let res = response.data;
        if (!res.error && !res.errorCode) {
            return response;
        } else if (res.errorCode == 2){
            // 1.Pop up prompt and re authorize 2. Click the pop-up window to exit WebView and re authorize
            Dialog.alert({
                title: 'Token has expired',
                message: 'Token has expired, exit and re authorize',
              }).then(() => {
                // Delete the stored token corresponding to the local wallet address
                store.commit('removeUserItemToken')
                Vue.prototype.H5WebView.apis.native.closeDapp()
            });
        } else if (res.errorCode === 500){
            Toast.fail('Network error')
            return Promise.reject(response)
        } else if (res.errorCode === 100030){
            console.log(res);
        } else {
            Toast.fail(res.message)
        }
    },
    error => { // error
        if (error) {
            return Promise.reject(error)
        }
    }
)

let urlEncode = function(param, key, encode) {
    if (param==null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += urlEncode(param[i], k, encode)
        }
    }

    return `${paramStr}`;
}

export default {

    /**
     * get
     * @param url
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    get( url, params){
        return instance.get(url + `?${urlEncode(params)}`)
    },
    /**
     * post
     * @param url
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    post(url, params, config){
        return instance.post(url, params, config).then(res => {
            if (res&& res.data) {
                return Promise.resolve(res.data);
            } else {
                return Promise.resolve(res);
            }

        })
    },
}


