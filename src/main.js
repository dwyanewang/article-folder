/*
 * @Author: Dwyanewang
 * @Date: 2021-06-27 08:54:32
 * @LastEditors: Dwyanewang
 * @LastEditTime: 2021-06-27 08:58:12
 * @Description: 
 * @FilePath: \vue-qrcode-reader\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
// import 'vant/lib/index'

Vue.config.productionTip = false
// Vue.use(Vant)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
