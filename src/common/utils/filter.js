/*
 * Vue 过滤器
 */

export default {
  install(Vue) {
    Vue.filter('certificateId', function (address) {
      if (!address) { return '--' }
      let len = address.length
      if (len > 15) {
        return address.substr(0, 15) + '...' + address.substr(len - 6, len)
      } else {
        return address
      }
    });
  }
};
