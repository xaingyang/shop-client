import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'

import 'swiper/css/swiper.css'  // 所有组件都能用上这个样式

// 浏览器控制台不显示非生产环境的打包环境
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus=this
  },
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
