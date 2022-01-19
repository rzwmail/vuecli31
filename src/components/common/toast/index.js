import Toast from './Toast.vue'
const obj = {}

obj.install = function(Vue){
    // console.log(1234890)
    // document.body.appendChild(Toast.$el)
    const toastContructor = Vue.extend(Toast)
    const toast = new toastContructor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj