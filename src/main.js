import Vue from 'vue'
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false

import router from './router/index'
import toast from './components/common/toast'



Vue.prototype.$bus = new Vue()
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
