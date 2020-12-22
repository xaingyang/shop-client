import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 浏览器控制台不显示非生产环境的打包环境
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
