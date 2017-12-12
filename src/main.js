// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from 'vue-stores'
Vue.use(stores)

import 'bootstrap'                        // 載入 bootstrap 的 JS 檔
import 'bootstrap/dist/css/bootstrap.css' // 載入 bootstrap CSS 檔
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    state:{
      currentUid:''
    }
  }
})
