import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import router from './router/index'

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
